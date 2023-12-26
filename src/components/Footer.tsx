import styles from './Footer.module.css';

export default function Footer () : JSX.Element
{
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>Ⓒ 2022 #VANLIFE</p>
        </footer>
    )
}