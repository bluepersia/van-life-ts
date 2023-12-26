import { useOutletContext } from "react-router-dom"
import OutletContext from "./OutletContext";
import styles from './VanPricing.module.css';

export default function Pricing ():JSX.Element
{
    const {van} = useOutletContext<OutletContext> ();
    return (
        <p className={styles.price}><span>${van.price}</span>/day</p>
    )
}