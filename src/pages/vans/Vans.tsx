import { useEffect, useState} from "react";
import useFetch, { Status } from "../../hooks/useFetch";
import { IVan } from "../../models/van";
import styles from './Vans.module.css';
import VanPreview from "./VanPreview";
import { useSearchParams } from "react-router-dom";

type Data = {
    vans: IVan[]
}

export default function Vans () : JSX.Element
{
    const fetch = useFetch ();
    const [vans, setVans] = useState<IVan[]> ([]);
    const [searchParams, setSearchParams] = useSearchParams ();

    useEffect (() => {
        fetch.run ('/api/vans');
    }, []);

    useEffect (() => {
        if (fetch.state.status == Status.Success)
            setVans ((fetch.state.data as Data).vans);
    }, [fetch.state.status])


    function handleOptionClick (val:string)
    {
        setSearchParams (curr => {
            if (!val)
                curr.delete ('type');
            else 
                curr.set ('type', val);

            return curr;
        });
    }
    const typeFilter = searchParams.get ('type') || '';

    const filteredVans = typeFilter ? vans.filter (van => van.type == typeFilter) : vans;

    return (
        <main className={styles.vans}>
            <h2 className={styles.title}>Explore our van options</h2>
            <div className={styles.options}>
                <button className={styles.optionBtn} onClick={()=> handleOptionClick('simple')}>Simple</button>
                <button className={styles.optionBtn} onClick={()=> handleOptionClick('luxury')}>Luxury</button>
                <button className={styles.optionBtn} onClick={()=> handleOptionClick('rugged')}>Rugged</button>
                <button className={styles.clearBtn} onClick={()=> handleOptionClick('')}>Clear filters</button>
            </div>

            <div className={styles.vansList}>
                {fetch.state.status == Status.Fail && <h2 className={styles.error}>{(fetch.state.err as Error).message}</h2>}
                {fetch.state.status == Status.Fetching && <h2>Loading...</h2>}
                {filteredVans.map (van => <VanPreview key={van.id} {...van} typeFilter={typeFilter}/>)}
            </div>
        </main>
    )

    
}