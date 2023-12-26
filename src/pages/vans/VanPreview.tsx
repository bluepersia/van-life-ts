import { IVan } from '../../models/van';
import styles from './VanPreview.module.css';
import {Link} from 'react-router-dom';

export default function VanPreview ({id, name, type, price, imageUrl, typeFilter}: IVan & {typeFilter:string}) : JSX.Element
{
    return (
        <Link to={id} state={{typeFilter}} className={styles.preview}>
            <img className={styles.img} src={imageUrl} />
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.type + ' '+ styles[type]}>{type}</p>
            <p className={styles.price}><span>${price}</span><br/>/day</p>
        </Link>
    )
}