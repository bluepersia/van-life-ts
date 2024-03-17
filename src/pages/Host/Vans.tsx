import { useQuery } from '@tanstack/react-query';
import { IVan } from '../../models/van';
import styles from './Vans.module.css';
import { Link } from 'react-router-dom';

export default function HostVans(): JSX.Element {
  const {
    data: vans,
    isLoading,
    error,
  } = useQuery({ queryKey: ['host-vans'], queryFn: fetchVans });

  async function fetchVans(): Promise<IVan[]> {
    const res = await fetch('/api/host/vans');

    if (!res.ok) throw new Error((await res.json()).message || res.statusText);

    return (await res.json()).vans;
  }
  return (
    <div className={styles.vans}>
      <h2 className={styles.title}>Your listed vans</h2>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3 className='error'>{error.message}</h3>}
      <div className={styles.list}>
        {vans &&
          vans.map((van) => (
            <Link key={van.id} to={van.id} className={styles.van}>
              <img src={van.imageUrl} className={styles.vanImg} />
              <div className={styles.vanContent}>
                <h3 className={styles.vanName}>{van.name}</h3>
                <p className={styles.vanPrice}>${van.price}/day</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
