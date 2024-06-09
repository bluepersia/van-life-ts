import { Link } from 'react-router-dom';

export default function NotFound(): JSX.Element {
  return (
    <main className='not-found'>
      <h2 className='not-found__title'>
        Sorry, the page you were looking for was not found.
      </h2>
      <Link to='/' className='not-found__btn'>
        Return to home
      </Link>
    </main>
  );
}
