import { useLocation, useParams } from 'react-router-dom';
import BackBtn from '../../components/BackBtn';
import styles from './VanDetail.module.css';
import useFetch, { Status } from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
import { IVan } from '../../models/van';

type Data = {
    vans: IVan;
}
export default function VanDetail () : JSX.Element
{
    const {id} = useParams ();
    const fetch = useFetch ();
    const [van, setVan] = useState<IVan | null> (null);
    const location = useLocation (); 

    useEffect (() =>
    {
        fetch.run (`/api/vans/${id}`);
    }, [])

    useEffect (() =>
    {
        if (fetch.state.status == Status.Success)
            setVan ((fetch.state.data as Data).vans);
    }, [fetch.state.status])

    const typeFilter = location.state?.typeFilter;

    return (
        <main className={styles.main}>
            <BackBtn to={typeFilter ? `..?type=${typeFilter}` : '..'}>Back to {typeFilter || 'all'} vans</BackBtn>
            {fetch.state.status == Status.Fail && <h2 className={styles.error}>{fetch.state.err?.message}</h2>}
            {fetch.state.status == Status.Fetching && <h2>Loading...</h2>}
            {van && (<div className={styles.van}>
                <img className={styles.img} src={van.imageUrl} />
                <p className={styles.type + ' ' + styles[van.type]}>{van.type}</p>
                <h3 className={styles.name}>{van.name}</h3>
                <p className={styles.price}><span>${van.price}</span>/day</p>
                <p className={styles.description}>{van.description}</p>
                <button className={styles.btn}>Rent this van</button>
            </div>)}
            
        </main>
    )
}