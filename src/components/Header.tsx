import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import Navlink from './Navlink';
import imgAvatar from '../img/Avatar.png';
import { useContext } from 'react';
import { AppContext } from '../App';

export default function Header(): JSX.Element {
  const { loggedIn } = useContext(AppContext);
  const location = useLocation();

  return (
    <header className={styles.header}>
      <Link to='.' className={styles.logo}>
        #VANLIFE
      </Link>

      <nav>
        <ul className='navlist'>
          <li>
            <Navlink to='host' styleIndex={0}>
              Host
            </Navlink>
          </li>
          <li>
            <Navlink to='about' styleIndex={0}>
              About
            </Navlink>
          </li>
          <li>
            <Navlink to='vans' styleIndex={0}>
              Vans
            </Navlink>
          </li>
          {!loggedIn && (
            <li>
              <Link
                to='login'
                state={{ from: location.pathname }}
                replace={true}
              >
                <img src={imgAvatar} />
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
