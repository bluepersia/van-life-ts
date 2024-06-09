import { useLocation, useParams } from 'react-router-dom';
import BackBtn from '../../components/BackBtn';
import { useQuery } from '@tanstack/react-query';
import { IVan } from '../../models/van';

export default function VanDetail(): JSX.Element {
  const { id } = useParams();
  const location = useLocation();

  const {
    data: van,
    isFetching,
    error,
  } = useQuery({ queryKey: ['van-detail'], queryFn: fetchVan });

  async function fetchVan(): Promise<IVan> {
    const res = await fetch(`/api/vans/${id}`);

    if (!res.ok) throw new Error((await res.json()).message || res.statusText);

    return (await res.json()).vans;
  }

  const { typeFilter } = location.state || {};

  return (
    <main className='van-detail'>
      <BackBtn to={'..' + (typeFilter ? `?type=${typeFilter}` : '')}>
        Back to {typeFilter || 'all'} vans
      </BackBtn>

      {isFetching && <h3>Loading...</h3>}
      {error && <h3 className='error'>{error.message}</h3>}
      {van && (
        <div className='van-detail__van'>
          <img src={van.imageUrl} alt={van.name} className='van-detail__img' />
          <p className={`van-detail__type van-type--${van.type}`}>{van.type}</p>
          <h2 className='van-detail__name'>{van.name}</h2>
          <p className='van-detail__price'>
            <span className='strong'>${van.price}</span>/day
          </p>
          <p className='van-detail__description'>{van.description}</p>
          <button className='van-detail__btn'>Rent this van</button>
        </div>
      )}
    </main>
  );
}
