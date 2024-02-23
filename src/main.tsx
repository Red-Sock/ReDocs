import './index.module.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import {router} from "./router/Routing";

import {RouterProvider} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <link href="https://fonts.googleapis.com/icon?family=Comfortaa" rel="stylesheet"/>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
