import { useQuery, useQueryClient } from '@tanstack/react-query';
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../App';

type FormData = {
  email: string;
  password: string;
};

type LoginData = {
  token: string;
};

export default function Login(): JSX.Element {
  const queryClient = useQueryClient();
  const location = useLocation();
  const navigate = useNavigate();

  const { setLoggedIn } = useContext(AppContext);

  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });

  const { data, isFetching, error } = useQuery({
    queryKey: ['login'],
    queryFn: loginFetch,
  });

  async function loginFetch(): Promise<LoginData | null> {
    if (!formData.email || !formData.password) return null;

    const res = await fetch(`/api/login`, {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error((await res.json()).message || res.statusText);

    return await res.json();
  }

  function handleFormSubmit(e: FormEvent): void {
    e.preventDefault();

    queryClient.invalidateQueries({ queryKey: ['login'] });
  }

  function handleInputChange(e: ChangeEvent): void {
    const { name, value } = e.target as HTMLInputElement;

    setFormData((formData) => ({ ...formData, [name]: value }));
  }

  useEffect(() => {
    if (data?.token) {
      setLoggedIn(true);
      navigate(location.state?.from || '/host', { replace: true });
    }
  }, [data]);

  return (
    <main className='login' onSubmit={handleFormSubmit}>
      <h2 className='login__title'>Sign in to your account</h2>

      <form className='login__form'>
        <input
          type='email'
          className='login__input'
          placeholder='Email address'
          name='email'
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type='password'
          className='login__input'
          placeholder='Password'
          name='password'
          value={formData.password}
          onChange={handleInputChange}
        />
        <button type='submit' className='login__btn'>
          Sign in
        </button>
      </form>

      {isFetching && <h3>Signing in...</h3>}
      {error && <h3 className='error'>{error.message}</h3>}
    </main>
  );
}
