import React from 'react';
import { createBrowserRouter } from 'react-router-dom'
import App from '../pages/App';
import Normal from '../pages/Normal'
import Async from '../pages/Async'
import Map from '../pages/Map'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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

