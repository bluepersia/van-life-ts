import { Link } from 'react-router-dom';
import NavLink from './NavLink';

export default function Header(): JSX.Element {
  return (
    <header className='header'>
      <Link to='.' className='header__logo'>
        #VANLIFE
      </Link>

      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <NavLink to='about'>About</NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to='vans'>Vans</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
