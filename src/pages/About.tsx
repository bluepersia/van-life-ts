import { Link } from 'react-router-dom';
import img from '../assets/img/about.png';

export default function About(): JSX.Element {
  return (
    <main className='about'>
      <img src={img} alt='Man on a van' className='about__img' />

      <div className='about__inner'>
        <h2 className='about__title'>
          Don’t squeeze in a sedan when you could relax in a van.
        </h2>
        <p className='about__body'>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
          <br />
          <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>

        <div className='about__cta'>
          <h3 className='about__cta-title'>
            Your destination is waiting.
            <br />
            Your van is ready
          </h3>
          <Link to='/vans' className='about__btn'>
            Explore our vans
          </Link>
        </div>
      </div>
    </main>
  );
}
