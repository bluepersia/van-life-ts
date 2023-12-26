import { useOutletContext } from 'react-router-dom';
import styles from './VanPhotos.module.css';
import OutletContext from './OutletContext';

export default function Photos () : JSX.Element
{
    const {van} = useOutletContext<OutletContext> ();
    return <img className={styles.img} src={van.imageUrl} />
}