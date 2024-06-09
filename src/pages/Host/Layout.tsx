import { Outlet } from 'react-router-dom';
import NavLink from '../../components/NavLink';

export default function HostLayout(): JSX.Element {
  return (
    <main className='host'>
      <nav className='nav host__nav'>
        <ul className='nav__list host__nav-list'>
          <li className='nav__link'>
            <NavLink to='.' end={true}>
              Dashboard
            </NavLink>
          </li>
          <li className='nav__item host__nav-item'>
            <NavLink to='income'>Income</NavLink>
          </li>
          <li className='nav__item host__nav-item'>
            <NavLink to='vans'>Vans</NavLink>
          </li>
          <li className='nav__item host__nav-item'>
            <NavLink to='reviews'>Reviews</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </main>
  );
}
