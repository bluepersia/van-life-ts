import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AppContext } from '../App';

export default function AuthLayout(): JSX.Element {
  const location = useLocation();
  const { isLoggedIn } = useContext(AppContext);

  if (isLoggedIn) return <Outlet />;

  return (
    <Navigate to='/login' state={{ from: location.pathname }} replace={true} />
  );
}
