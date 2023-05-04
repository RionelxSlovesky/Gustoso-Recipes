import React, { useContext } from 'react';
import { Navigate } from "react-router-dom";
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext)

    return (
        <div>
            {
                loading || (user ? children : <Navigate to='/auth/login'></Navigate>)
            }
        </div>
    );
};

export default PrivateRoute;