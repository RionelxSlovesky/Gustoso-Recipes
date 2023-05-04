import React, { useContext } from 'react';
import { Navigate } from "react-router-dom";
import { AuthContext } from '../providers/AuthProvider';
import { RingLoader } from 'react-spinners'

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext)

    if(loading) {
        return <RingLoader className='mx-auto' color="#2B3856" />
    }else {
        return (user ? children : <Navigate to='/auth/login'></Navigate>)
    }
};

export default PrivateRoute;