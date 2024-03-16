import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home(): JSX.Element {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        You got the travel plans, we got the travel vans.
      </h1>
      <p className={styles.body}>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link to='vans' className={styles.btn + ' btn-orange'}>
        Find your van
      </Link>
    </main>
  );
}
