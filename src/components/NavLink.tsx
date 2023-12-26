import { NavLink } from "react-router-dom"
import React, { PropsWithChildren } from "react"
interface Props extends React.HTMLAttributes<HTMLElement>
{
    to: string
    end?:boolean
}


export default function Navlink ({children, to, end=false,...restProps}:PropsWithChildren<Props>) : JSX.Element
{
    const style = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: 'black'
    }
    return  <NavLink to= {to} {...restProps} end={end} style={({isActive}) => isActive ? style : {}}>{children}</NavLink>
}