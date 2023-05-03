import React from 'react';
import {
    createBrowserRouter
} from 'react-router-dom'
import Main from '../components/Layout/Main/Main';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <h2>This is Home</h2>
            }
        ]
    }
])

