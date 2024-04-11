import React from 'react';
import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login'
import App from '../pages/App';
import Normal from '../pages/Normal'
import Async from '../pages/Async'
import Map from '../pages/Map'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        children: [
            {
                path: "/normal",
                element: <Normal />
            },
            {
                path: "/async",
                element: <Async />
            },
            {
                path: "/map",
                element: <Map />
            },
        ],
    }
])

export default router

