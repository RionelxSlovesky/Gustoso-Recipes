import React, { useContext } from 'react';
import { Navigate } from "react-router-dom";
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext)

    if(loading) {
        return <h1>Loading</h1>
    }else {
        return (user ? children : <Navigate to='/auth/login'></Navigate>)
    }
};

export default PrivateRoute;