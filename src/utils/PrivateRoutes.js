import { Outlet, Navigate} from 'react-router-dom'
import AuthContext from "../Contexts/AuthContext";
import {useContext } from 'react';

const PrivateRoutes = () => {
    const a = AuthContext();
    const AuthContextProvider = useContext(a);
    return (
        AuthContextProvider.authToken ? <Outlet/> : <Navigate to='/signin'/>
    )
}

export default PrivateRoutes;
