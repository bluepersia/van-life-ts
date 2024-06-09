import { useQuery } from '@tanstack/react-query';
import { IVan } from '../models/van';
import { Link, useSearchParams } from 'react-router-dom';

export default function Vans(): JSX.Element {
  const {
    data: vans,
    isFetching,
    error,
  } = useQuery({ queryKey: ['vans'], queryFn: fetchVans });

  const [searchParams, setSearchParams] = useSearchParams();

  async function fetchVans(): Promise<IVan[]> {
    const res = await fetch(`/api/vans`);

    if (!res.ok) throw new Error((await res.json()).message || res.statusText);

    return (await res.json()).vans;
  }

  function setTypeFilter(value: string): void {
    setSearchParams((params) => {
      if (!value) params.delete('type');
      else params.set('type', value);

      return params;
    });
  }

  const typeFilter = searchParams.get('type') || '';
  let vansFiltered = vans || [];

  if (typeFilter)
    vansFiltered = vansFiltered.filter((van) => van.type === typeFilter);

  return (
    <main className='vans'>
      <div className='vans__top'>
        <h2 className='vans__title'>Explore our van options</h2>
        <div className='vans__opts'>
          <button
            className='vans__opt vans__opt--simple'
            onClick={() => setTypeFilter('simple')}
          >
            Simple
          </button>
          <button
            className='vans__opt vans__opt--luxury '
            onClick={() => setTypeFilter('luxury')}
          >
            Luxury
          </button>
          <button
            className='vans__opt vans__opt--rugged'
            onClick={() => setTypeFilter('rugged')}
          >
            Rugged
          </button>
          <button className='vans__clear' onClick={() => setTypeFilter('')}>
            Clear filters
          </button>
        </div>
      </div>

      <ul className='vans__list'>
        {isFetching && <h3>Loading....</h3>}
        {error && <h3 className='error'>{error.message}</h3>}
        {vansFiltered.map((van) => (
          <li className='vans__van' key={van.id}>
            <Link to={van.id} className='vans__van-link' state={{ typeFilter }}>
              <img
                src={van.imageUrl}
                alt={van.name}
                className='vans__van-img'
              />
              <h3 className='vans__van-name'>{van.name}</h3>
              <p className='vans__van-price'>
                <span className='strong'>${van.price}</span>
                <br />
                /day
              </p>
              <p className={`vans__van-type van-type--${van.type}`}>
                {van.type}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
