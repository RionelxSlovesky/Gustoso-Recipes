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
import Blog from '../components/Pages/Blog/Blog';
import AuthRoute from './AuthRoute';
import PrivateRoute from './PrivateRoute';


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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/chef/:id',
                element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
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
                element: <AuthRoute><Login></Login></AuthRoute>
            },
            {
                path: '/auth/register',
                element: <AuthRoute><Registration></Registration></AuthRoute>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

