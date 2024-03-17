import { useOutletContext } from 'react-router-dom';
import styles from './VanPhotos.module.css';
import { IVan } from '../../models/van';

export default function HostVanPhotos(): JSX.Element {
  const van = useOutletContext<IVan>();

  return <img src={van.imageUrl} className={styles.photo} />;
}
