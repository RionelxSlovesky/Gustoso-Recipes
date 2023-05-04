import React, { useContext } from 'react';
import { Navigate } from "react-router-dom";
import { AuthContext } from '../providers/AuthProvider';

const AuthRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext)

    return (
        <div>
        {
            loading || (user ? <Navigate to='/'></Navigate> : children)
        }
        </div>
    );
};

export default AuthRoute;