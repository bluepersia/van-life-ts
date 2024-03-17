import { Outlet, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import styles from './VanDetail.module.css';
import { IVan } from '../../models/van';
import BackBtn from '../../components/BackBtn';
import Navlink from '../../components/Navlink';

export default function HostVanDetail(): JSX.Element {
  const { id } = useParams();
  const {
    data: van,
    isLoading,
    error,
  } = useQuery({ queryKey: ['host-van-detail'], queryFn: fetchVan });

  async function fetchVan(): Promise<IVan> {
    const res = await fetch(`/api/vans/${id}`);

    if (!res.ok) throw new Error((await res.json()).message || res.statusText);

    return (await res.json()).vans;
  }

  return (
    <div className={styles.vanDetail}>
      <BackBtn>Back to all vans</BackBtn>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3 className='error'>{error.message}</h3>}
      {van && (
        <div className={styles.van}>
          <header className={styles.vanHeader}>
            <img src={van.imageUrl} className={styles.vanImg} />
            <div className={styles.vanContent}>
              <p className={styles.vanType + ` vanType-${van.type}`}>
                {van.type}
              </p>
              <h3 className={styles.vanName}>{van.name}</h3>
              <p className={styles.vanPrice}>
                <span>${van.price}</span>/day
              </p>
            </div>
          </header>

          <nav>
            <ul className='navlist'>
              <li>
                <Navlink to='.' end={true} styleIndex={2}>
                  Details
                </Navlink>
              </li>
              <li>
                <Navlink to='pricing' styleIndex={2}>
                  Pricing
                </Navlink>
              </li>
              <li>
                <Navlink to='photos' styleIndex={2}>
                  Photos
                </Navlink>
              </li>
            </ul>
          </nav>

          <Outlet context={van} />
        </div>
      )}
    </div>
  );
}
