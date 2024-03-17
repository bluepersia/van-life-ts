import { useQuery } from '@tanstack/react-query';
import styles from './Login.module.css';
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';
import { useLocation, useNavigate } from 'react-router-dom';

type FormData = {
  email: string;
  password: string;
};

type LoginData = {
  token: string;
};

export default function Login(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['login'],
    queryFn: fetchLogin,
  });
  const { setLoggedIn } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();

  async function fetchLogin(): Promise<LoginData | null> {
    if (!formData.email || !formData.password) return null;

    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error((await res.json()).message || res.statusText);

    return await res.json();
  }

  useEffect(() => {
    if (data?.token) {
      setLoggedIn(true);
      navigate(location.state?.from || '/host', { replace: true });
    }
  }, [data]);

  function handleInputChange(e: ChangeEvent): void {
    const { name, value } = e.target as HTMLInputElement;

    setFormData((formData) => ({ ...formData, [name]: value }));
  }

  function handleFormSubmit(e: FormEvent): void {
    e.preventDefault();

    refetch();
  }
  return (
    <main className={styles.main}>
      <h2 className='heading-2'>Sign in to your account</h2>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3 className='error'>{error.message}</h3>}
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <input
          type='email'
          placeholder='Email address'
          name='email'
          value={formData.email}
          onChange={handleInputChange}
          className={styles.input}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          value={formData.password}
          onChange={handleInputChange}
          className={styles.input}
        />
        <button type='submit' className={styles.btn + ' btn-orange'}>
          Sign in
        </button>
      </form>
    </main>
  );
}
