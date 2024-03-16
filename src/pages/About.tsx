import styles from './About.module.css';
import imgCover from '../img/about.png';
import { Link } from 'react-router-dom';

export default function About(): JSX.Element {
  return (
    <main>
      <img src={imgCover} className={styles.imgCover} />
      <div className={styles.inner}>
        <h2 className='heading-2'>
          Don’t squeeze in a sedan when you could relax in a van.
        </h2>
        <p className={styles.body}>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
          <br />
          <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className={styles.cta}>
          <h3 className={styles.cta_title}>
            Your destination is waiting. <br />
            Your van is ready.
          </h3>
          <Link to='/vans' className={styles.cta_btn + ' btn-black'}>
            Explore our vans
          </Link>
        </div>
      </div>
    </main>
  );
}
