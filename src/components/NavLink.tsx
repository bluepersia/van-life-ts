import { PropsWithChildren } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

type Props = {
  to: string;
};

export default function NavLink({
  children,
  to,
}: PropsWithChildren<Props>): JSX.Element {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        isActive ? 'nav__link nav__link--active' : 'nav__link'
      }
    >
      {children}
    </RouterNavLink>
  );
}
