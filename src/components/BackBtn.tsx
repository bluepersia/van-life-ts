import { HTMLAttributes, PropsWithChildren } from "react";
import {Link} from 'react-router-dom';
import styles from './BackBtn.module.css';

interface Props extends HTMLAttributes<HTMLElement> 
{
    to?: string;
}
export default function BackBtn({children, to = '..', ...restProps}:PropsWithChildren<Props>) : JSX.Element
{
    return <div className={styles.btn}{...restProps}>← <Link to={to} relative='path' >{children}</Link></div>
}