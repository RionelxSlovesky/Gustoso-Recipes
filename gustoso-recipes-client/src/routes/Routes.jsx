import React from 'react';
import {
    createBrowserRouter
} from 'react-router-dom'
import Main from '../components/Layout/Main/Main';
import Login from '../components/Pages/Auth/Login/Login';
import Auth from '../components/Layout/Auth/Auth';
import Registration from '../components/Pages/Auth/Registration/Registration';
import Home from '../components/Pages/Home/Home';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    },
    {
        path: '/auth',
        element: <Auth></Auth>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Registration></Registration>
            }
        ]
    }
])

