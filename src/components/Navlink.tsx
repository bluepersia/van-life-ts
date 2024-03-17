import { PropsWithChildren } from 'react';
import styles from './Navlink.module.css';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  styleIndex: number;
  end?: boolean;
};

const activeStyle = {
  textDecoration: 'underline',
  color: '#161616',
};

const activeFontWeights = [600, 700, 700];

export default function Navlink({
  to,
  styleIndex,
  end = false,
  children,
}: PropsWithChildren<Props>): JSX.Element {
  return (
    <NavLink
      to={to}
      className={styles.navlink + ' ' + styles[`navlink-${styleIndex}`]}
      style={({ isActive }) =>
        isActive
          ? {
              ...activeStyle,
              fontWeight: activeFontWeights[styleIndex],
            }
          : {}
      }
      end={end}
    >
      {children}
    </NavLink>
  );
}
