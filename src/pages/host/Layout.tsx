import { Outlet } from 'react-router-dom';
import Navlink from '../../components/NavLink';
import styles from './Layout.module.css';

export default function HostLayout () : JSX.Element
{
    return (
        <main className={styles.host}>
            <nav className={styles.nav}>
                <ul className={styles.nav_list}>
                    <li><Navlink to='.' end={true} className={styles.nav_link}>Dashboard</Navlink></li>
                    <li><Navlink to='income' className={styles.nav_link}>Income</Navlink></li>
                    <li><Navlink to='vans' className={styles.nav_link}>Vans</Navlink></li>
                    <li><Navlink to='reviews' className={styles.nav_link}>Reviews</Navlink></li>
                </ul>
            </nav>

            <Outlet/>
        </main>
    )
}