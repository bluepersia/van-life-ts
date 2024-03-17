import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export default function NotFound(): JSX.Element {
  return (
    <main className={styles.main}>
      <h2 className='heading-2'>
        Sorry, the page you were looking for was not found.
      </h2>
      <Link to='/' className={styles.btn + ' btn-black'}>
        Return to home
      </Link>
    </main>
  );
}
