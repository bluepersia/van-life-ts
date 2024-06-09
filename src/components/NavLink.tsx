import { PropsWithChildren } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

type Props = {
  to: string;
  end?: boolean;
};

export default function NavLink({
  children,
  to,
  end = false,
}: PropsWithChildren<Props>): JSX.Element {
  return (
    <RouterNavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        isActive ? 'nav__link nav__link--active' : 'nav__link'
      }
    >
      {children}
    </RouterNavLink>
  );
}
