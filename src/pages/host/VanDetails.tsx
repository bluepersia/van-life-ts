import { useOutletContext } from "react-router-dom"
import styles from './VanDetails.module.css'
import OutletContext from "./OutletContext";

export default function Details () : JSX.Element
{
    const {van} = useOutletContext<OutletContext> ();

    return (<>
                <p className={styles.body}><span>Name: </span>{van.name}</p>
                <p className={styles.body}><span>Category: </span>{van.type}</p>
                <p className={styles.body}><span>Description: </span>{van.description}</p>
            </>
    )
}