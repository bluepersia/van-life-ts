import { useOutletContext } from 'react-router-dom';
import styles from './VanDetails.module.css';
import { IVan } from '../../models/van';

export default function HostVanDetails(): JSX.Element {
  const van = useOutletContext<IVan>();

  return (
    <div className={styles.details}>
      <p className={styles.body}>
        <span>Name: </span>
        {van.name}
      </p>
      <p className={styles.body}>
        <span>Category: </span>
        {van.type[0] + van.type.slice(1)}
      </p>
      <p className={styles.body}>
        <span>Description: </span>
        {van.description}
      </p>
    </div>
  );
}
