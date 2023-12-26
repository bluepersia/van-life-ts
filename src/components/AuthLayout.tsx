import { useContext } from "react"
import { AppContext } from "../App"
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthLayout () : JSX.Element
{
    const {loggedIn} = useContext (AppContext);
    const location = useLocation ();

    if (loggedIn)
        return <Outlet/>;

    return <Navigate to ='/login' replace={true} state={{from:location.pathname}}/>
}