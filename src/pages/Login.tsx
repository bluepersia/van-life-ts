import { useEffect, useState } from 'react';
import styles from './Login.module.css';
import useFetch, { Method, Status } from '../hooks/useFetch';
import { useContext } from 'react';
import { AppContext } from '../App';
import { useNavigate, useLocation } from 'react-router-dom';

type FormData = 
{
    email:string,
    password:string
}

export default function Login ()
{
    const [formData, setFormData] = useState<FormData> ({
        email: '',
        password:''
    });
    const fetch = useFetch ();
    const {loggedIn, setLoggedIn} = useContext (AppContext);
    function handleInputChange (e:React.ChangeEvent) : void
    {
        const {name, value} = e.target as HTMLInputElement;
        setFormData (curr => ({...curr, [name]: value}));
    }


    function handleFormSubmit (e:React.FormEvent) : void
    {
        e.preventDefault ();
        fetch.run ('/api/login', Method.Post, JSON.stringify (formData));
    }

    useEffect (() => {
        if (fetch.state.status == Status.Success)
            setLoggedIn (true);
    }, [fetch.state])

    const navigate = useNavigate ();
    const location = useLocation ();
    useEffect (()=>
    {
        if (loggedIn)
            navigate (location.state?.from || '/host', {replace:true});

    }, [loggedIn]);

    return (
        <div className={styles.login}>
            <h2 className={styles.title}>Sign in to your account</h2>
            {fetch.state.status == Status.Fail && <h2 className={styles.error}>{fetch.state.err?.message}</h2>}
            {fetch.state.status == Status.Fetching && <h2>Logging in...</h2>}
            <form className={styles.form} onSubmit={handleFormSubmit}>
                <input className={styles.input} type='email' name='email' value={formData.email} onChange={handleInputChange} placeholder='Email address'/>
                <input className={styles.input} type='password' name='password' value={formData.password} onChange={handleInputChange} placeholder='Password'/>
                <button className={styles.btn}>Sign in</button>
            </form>
        </div>
    )
}