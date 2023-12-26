import { Outlet, useParams } from 'react-router-dom';
import BackBtn from '../../components/BackBtn';
import styles from './VanDetail.module.css';
import useFetch, { Status } from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
import { IVan } from '../../models/van';
import Navlink from '../../components/NavLink';

type Data = {
    vans: IVan;
}

export default function VanDetail () : JSX.Element
{
    const {id} = useParams ();
    const fetch = useFetch ();
    const [van, setVan] = useState<IVan | null> (null);

    useEffect (() =>
    {
        fetch.run (`/api/vans/${id}`);
    }, []);
    
    useEffect (() => {
        if (fetch.state.status == Status.Success)
            setVan ((fetch.state.data as Data).vans);

    }, [fetch.state.status])

    return (
        <div className={styles.van}>
            <BackBtn>Back to all vans</BackBtn>
            {fetch.state.status == Status.Fail && <h2 className={styles.error}>{fetch.state.err?.message}</h2>}
            {fetch.state.status == Status.Fetching && <h2>Loading...</h2>}
            {van && (<>
            <div className={styles.inner}>
                <div className={styles.header}>
                    <img className={styles.img} src={van.imageUrl} />
                    <p className={styles.type + ' ' + styles[van.type]}>{van.type}</p>
                    <h3 className={styles.name}>{van.name}</h3>
                    <p className={styles.price}><span>${van.price}</span>/day</p>
                </div>

            <nav>
                <ul className={styles.nav_list}>
                    <li><Navlink to='.' end={true} className={styles.nav_link}>Details</Navlink></li>
                    <li><Navlink to='pricing' end={true} className={styles.nav_link}>Pricing</Navlink></li>
                    <li><Navlink to='photos' end={true} className={styles.nav_link}>Photos</Navlink></li>
                </ul>
            </nav>
                <div className={styles.outletContainer}>
                    <Outlet context={{van}}/>
                </div>
            </div>
                </>
            )}
        </div>
    )
}