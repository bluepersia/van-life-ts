import { Link, useLocation } from 'react-router-dom';
import NavLink from './NavLink';
import { useContext } from 'react';
import { AppContext } from '../App';
import imgAvatar from '../assets/img/Avatar.png';

export default function Header(): JSX.Element {
  const location = useLocation();
  const { isLoggedIn } = useContext(AppContext);

  return (
    <header className='header'>
      <Link to='.' className='header__logo'>
        #VANLIFE
      </Link>

      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <NavLink to='host'>Host</NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to='about'>About</NavLink>
          </li>
          <li className='nav__item'>
            <NavLink to='vans'>Vans</NavLink>
          </li>
          {!isLoggedIn && (
            <li className='nav__item'>
              <Link
                to='login'
                state={{ from: location.pathname }}
                replace={true}
              >
                <img src={imgAvatar} alt='Avatar' />
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
