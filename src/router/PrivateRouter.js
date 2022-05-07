import React from 'react';
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { toastWarnNotify } from '../helpers/toastNotify';

const PrivateRouter = ()=>{
    const {currentUser} = useContext(AuthContext)
    if(!currentUser){
        toastWarnNotify("Please Login First")
        return (
        <Navigate to="/login" />
        
        )
        
    }else{
        return(
            <Outlet />
        )
    }
}
export default PrivateRouter