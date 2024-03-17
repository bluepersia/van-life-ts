import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Navlink from './Navlink';

export default function Header(): JSX.Element {
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
        </ul>
      </nav>
    </header>
  );
}
