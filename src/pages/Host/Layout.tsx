import { Outlet } from 'react-router-dom';
import Navlink from '../../components/Navlink';
import styles from './Layout.module.css';

export default function HostLayout(): JSX.Element {
  return (
    <main className={styles.main}>
      <nav>
        <ul className='navlist'>
          <li>
            <Navlink to='.' end={true} styleIndex={1}>
              Dashboard
            </Navlink>
          </li>
          <li>
            <Navlink to='income' styleIndex={1}>
              Income
            </Navlink>
          </li>
          <li>
            <Navlink to='vans' styleIndex={1}>
              Vans
            </Navlink>
          </li>
          <li>
            <Navlink to='Reviews' styleIndex={1}>
              Reviews
            </Navlink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </main>
  );
}
