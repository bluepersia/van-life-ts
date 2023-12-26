import styles from './NotFound.module.css';
import {Link} from 'react-router-dom';

export default function NotFound ()
{
    return  (
        <main className={styles.main}>
            <h2 className={styles.title}>Sorry, the page you were looking for was not found.</h2>
            <Link to='/' className={styles.btn}>Return to home</Link>
        </main>
    )
}