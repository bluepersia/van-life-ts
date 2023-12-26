import styles from './About.module.css';
import img from '../img/about.png';
import {Link} from 'react-router-dom';

export default function About () : JSX.Element
{
    return (
        <main className={styles.about}>
            <img src={img} className={styles.img}/>
            <h2 className={styles.title}>Don’t squeeze in a sedan when you could relax in a van.</h2>
            <p className={styles.body}>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
(Hitch costs extra 😉)
<br/><br/>
Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

            <div className={styles.cta}>
                <h3 className={styles.cta_title}>Your destination is waiting. <br/> Your van is ready.</h3>
                <Link className={styles.cta_btn} to='vans'>Explore our vans</Link>
            </div>
        </main>
    )
}