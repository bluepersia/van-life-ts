import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/img/Arrow.png';

type Props = {
  to?: string;
};
export default function BackBtn({
  children,
  to = '..',
}: PropsWithChildren<Props>): JSX.Element {
  return (
    <Link to={to} relative='path' className='back-btn'>
      <img src={img} alt='Arrow' className='back-btn__img-arrow' />
      <span className='underline'>{children}</span>
    </Link>
  );
}
