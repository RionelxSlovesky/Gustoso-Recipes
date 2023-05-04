import React from 'react';
import {
    createBrowserRouter
} from 'react-router-dom'
import Main from '../components/Layout/Main/Main';
import Login from '../components/Pages/Auth/Login/Login';
import Auth from '../components/Layout/Auth/Auth';
import Registration from '../components/Pages/Auth/Registration/Registration';
import Home from '../components/Pages/Home/Home';
import ChefDetails from '../components/Pages/ChefDetails/ChefDetails';
import ErrorPage from '../components/Pages/ErrorPage/ErrorPage';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://gustoso-recipes-server-rionelxslovesky.vercel.app/chefs')
            },
            {
                path: '/chef/:id',
                element: <ChefDetails></ChefDetails>,
                loader: ({params}) => fetch(`https://gustoso-recipes-server-rionelxslovesky.vercel.app/chefrecipes/${params.id}`)
            }
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
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

