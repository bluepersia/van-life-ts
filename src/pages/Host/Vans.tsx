import { useQuery } from '@tanstack/react-query';
import { IVan } from '../../models/van';
import { Link } from 'react-router-dom';

export default function HostVans(): JSX.Element {
  const {
    data: vans,
    isFetching,
    error,
  } = useQuery({ queryKey: ['host-vans'], queryFn: fetchVans });

  async function fetchVans(): Promise<IVan[]> {
    const res = await fetch(`/api/host/vans`);

    if (!res.ok) throw new Error((await res.json()).message || res.statusText);

    return (await res.json()).vans;
  }

  return (
    <div className='host-vans'>
      <h2 className='host-vans__title'>Your listed vans</h2>

      <ul className='host-vans__list'>
        {isFetching && <h3>Loading...</h3>}
        {error && <h3 className='error'>{error.message}</h3>}
        {vans &&
          vans.map((van) => (
            <li key={van.id} className='host-vans__van'>
              <Link to={van.id} className='host-vans__van-link'>
                <img
                  src={van.imageUrl}
                  alt={van.name}
                  className='host-vans__van-img'
                />
                <div className='host-vans__van-content'>
                  <h3 className='host-vans__van-name'>{van.name}</h3>
                  <p className='host-vans__van-price'>${van.price}/day</p>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
