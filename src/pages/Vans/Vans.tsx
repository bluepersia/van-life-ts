import { Link, useSearchParams } from 'react-router-dom';
import { IVan } from '../../models/van';
import styles from './Vans.module.css';
import { useQuery } from '@tanstack/react-query';

export default function Vans(): JSX.Element {
  const {
    data: vans,
    isLoading,
    error,
  } = useQuery({ queryKey: ['vans'], queryFn: fetchVans });
  const [searchParams, setSearchParams] = useSearchParams();

  async function fetchVans(): Promise<IVan[]> {
    const res = await fetch('/api/vans');

    if (!res.ok) throw new Error((await res.json()).message || res.statusText);

    return (await res.json()).vans;
  }

  function setTypeFilter(val: string): void {
    setSearchParams((params) => {
      if (!val) params.delete('type');
      else params.set('type', val);

      return params;
    });
  }

  const typeFilter = searchParams.get('type');
  let vansFiltered = vans || [];
  if (typeFilter)
    vansFiltered = vansFiltered.filter((van) => van.type === typeFilter);

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h2 className='heading-2'>Explore our van options</h2>
        <div className={styles.options}>
          <button
            onClick={() => setTypeFilter('simple')}
            className={styles.option}
          >
            Simple
          </button>
          <button
            onClick={() => setTypeFilter('luxury')}
            className={styles.option}
          >
            Luxury
          </button>
          <button
            onClick={() => setTypeFilter('rugged')}
            className={styles.option}
          >
            Rugged
          </button>
          <button onClick={() => setTypeFilter('')} className={styles.clear}>
            Clear fiters
          </button>
        </div>
      </header>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3 className='error'>{error.message}</h3>}
      <div className={styles.list}>
        {vansFiltered &&
          vansFiltered.map((van) => (
            <Link
              key={van.id}
              to={van.id}
              state={{ typeFilter }}
              className={styles.van}
            >
              <img className={styles.vanImg} src={van.imageUrl} />
              <h3 className={styles.vanName}>{van.name}</h3>
              <p className={styles.vanPrice}>
                <span>${van.price}</span>
                <br />
                /day
              </p>
              <p className={styles.vanType + ` vanType-${van.type}`}>
                {van.type}
              </p>
            </Link>
          ))}
      </div>
    </main>
  );
}
