import { useOutletContext } from 'react-router-dom';
import styles from './VanPricing.module.css';
import { IVan } from '../../models/van';

export default function HostVanPricing(): JSX.Element {
  const van = useOutletContext<IVan>();

  return (
    <p className={styles.price}>
      <span>${van.price.toFixed(2)}</span>/day
    </p>
  );
}
