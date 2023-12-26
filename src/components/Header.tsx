import styles from './Header.module.css';
import {Link, useLocation} from 'react-router-dom';
import Navlink from './NavLink';
import { useContext } from 'react';
import { AppContext } from '../App';

export default function Header () : JSX.Element
{
    const {loggedIn, setLoggedIn} = useContext (AppContext);
    const location = useLocation ();
    return (
        <header className={styles.header}>
            <Link className={styles.logo} to='.'>#VANLIFE</Link>
            <nav className={styles.nav}>
                <ul className={styles.nav_list}>
                    <li><Navlink to='host' className={styles.nav_link}>Host</Navlink></li>
                    <li><Navlink to='about' className={styles.nav_link}>About</Navlink></li>
                    <li><Navlink to='vans'className={styles.nav_link}>Vans</Navlink></li>
                    {!loggedIn && <li><Link to='login' state={{from:location.pathname}}><i className="fa-solid fa-user"></i></Link></li>}
                    {loggedIn && <li><i onClick={() => setLoggedIn (false)} className="fa-solid fa-circle-xmark"></i></li>}
                </ul>
            </nav>
        </header>
    )
}