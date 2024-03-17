import { PropsWithChildren } from 'react';
import styles from './BackBtn.module.css';
import { Link } from 'react-router-dom';
import imgArrow from '../img/Arrow.png';
type Props = {
  to?: string;
};

export default function BackBtn({
  to = '..',
  children,
}: PropsWithChildren<Props>): JSX.Element {
  return (
    <Link to={to} relative='path' className={styles.btn}>
      <img src={imgArrow} /> <span>{children}</span>
    </Link>
  );
}
