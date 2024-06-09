import { Link } from 'react-router-dom';

export default function Home(): JSX.Element {
  return (
    <main className='home'>
      <h1 className='home__title'>
        You got the travel plans, we got the travel vans.
      </h1>
      <p className='home__body'>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link to='vans' className='home__btn'>
        Find your van
      </Link>
    </main>
  );
}
