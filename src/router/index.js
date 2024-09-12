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
    },
    {
        path: "/main",
        element: <App />,
        children: [
            {
                path: "/main/normal",
                element: <Normal />
            },
            {
                path: "/main/async",
                element: <Async />
            },
            {
                path: "/main/map",
                element: <Map />
            },
        ],
    }
])

export default router

