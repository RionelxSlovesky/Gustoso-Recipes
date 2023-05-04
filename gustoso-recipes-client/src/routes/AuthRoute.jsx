import React, { useContext } from 'react';
import { Navigate } from "react-router-dom";
import { AuthContext } from '../providers/AuthProvider';

const AuthRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext)

    if(loading) {
        return <h1>Loading</h1>
    }else {
        return (user ? <Navigate to='/'></Navigate> : children)
    }
};

export default AuthRoute;