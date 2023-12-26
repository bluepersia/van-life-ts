import { useEffect, useState } from 'react';
import useFetch, { Status } from '../../hooks/useFetch';
import styles from './Vans.module.css';
import { IVan } from '../../models/van';
import { Link } from 'react-router-dom';

type Data = {
    vans: IVan[];
}

export default function Vans ():JSX.Element
{
    const fetch = useFetch ();
    const [vans, setVans] = useState<IVan[]> ([]);
    useEffect (() => 
    {
        fetch.run ('/api/host/vans')
    },[])

    useEffect (() => {

        if (fetch.state.status == Status.Success)
            setVans ((fetch.state.data as Data).vans);

    }, [fetch.state.status])

    return (
        <div className={styles.main}>
            <h2 className={styles.title}>Your listed vans</h2>
            {fetch.state.status == Status.Fail && <h2>{fetch.state.err?.message}</h2>}
            {fetch.state.status == Status.Fetching && <h2>Loading...</h2>}
            <ul className={styles.list}>
            {vans.map (({id, imageUrl, name, price}) => (
                <Link className={styles.vanPreview} to={id}>
                    <img className={styles.vanImg} src={imageUrl} />
                    <div className={styles.vanContent}>
                        <h3 className={styles.vanName}>{name}</h3>
                        <p className={styles.vanPrice}>${price}/day</p>
                    </div>
                </Link>
            ))}
            </ul>
        </div>
    )
}