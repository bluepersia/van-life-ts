import { useLocation, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import styles from './VanDetail.module.css';
import { IVan } from '../../models/van';
import BackBtn from '../../components/BackBtn';

export default function VanDetail(): JSX.Element {
  const { id } = useParams();
  const {
    data: van,
    isLoading,
    error,
  } = useQuery({ queryKey: ['van-detail'], queryFn: fetchVan });

  const location = useLocation();

  async function fetchVan(): Promise<IVan> {
    const res = await fetch(`/api/vans/${id}`);

    if (!res.ok) throw new Error((await res.json()).message || res.statusText);

    return (await res.json()).vans;
  }

  const { typeFilter } = location.state || {};

  return (
    <main className={styles.main}>
      <BackBtn to={typeFilter ? `..?type=${typeFilter}` : '..'}>
        Back to {typeFilter || 'all'} vans
      </BackBtn>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3 className='error'>{error.message}</h3>}

      {van && (
        <div className={styles.van}>
          <img src={van.imageUrl} className={styles.img} />
          <p className={`vanType vanType-${van.type}`}>{van.type}</p>
          <h2 className='heading-2'>{van.name}</h2>
          <p className={styles.price}>
            <span>${van.price}</span>/day
          </p>
          <p className={styles.description}>{van.description}</p>
          <button className={styles.btn + ' btn-orange'}>Rent this van</button>
        </div>
      )}
    </main>
  );
}
