import { useQuery } from '@tanstack/react-query';
import { Outlet, useParams } from 'react-router-dom';
import { IVan } from '../../models/van';
import BackBtn from '../../components/BackBtn';
import NavLink from '../../components/NavLink';

export default function HostVanDetail(): JSX.Element {
  const { id } = useParams();
  const {
    data: van,
    isFetching,
    error,
  } = useQuery({ queryKey: ['host-van'], queryFn: fetchVan });

  async function fetchVan(): Promise<IVan> {
    const res = await fetch(`/api/vans/${id}`);

    if (!res.ok) throw new Error((await res.json()).message || res.statusText);

    return (await res.json()).vans;
  }

  return (
    <div className='host-van'>
      <BackBtn>Back to all vans</BackBtn>
      {isFetching && <h3>Loading...</h3>}
      {error && <h3 className='error'>{error.message}</h3>}
      {van && (
        <div className='host-van__inner'>
          <div className='host-van__header'>
            <img src={van.imageUrl} alt={van.name} className='host-van__img' />
            <div className='host-van__content'>
              <p className={`host-van__type van-type--${van.type}`}>
                {van.type}
              </p>
              <h2 className='host-van__name'>{van.name}</h2>
              <p className='host-van__price'>
                <span className='strong'>$60</span>/day
              </p>
            </div>
          </div>

          <nav className='nav'>
            <ul className='nav__list host-van__nav-list'>
              <li className='nav__item'>
                <NavLink to='.' end={true}>
                  Details
                </NavLink>
              </li>
              <li className='nav__item'>
                <NavLink to='pricing'>Pricing</NavLink>
              </li>
              <li className='nav__item'>
                <NavLink to='photos'>Photos</NavLink>
              </li>
            </ul>
          </nav>

          <Outlet context={van} />
        </div>
      )}
    </div>
  );
}
