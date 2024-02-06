import * as React from "react";

import {createBrowserRouter} from "react-router-dom";
import {Home} from "../pages/home/Home";
import {ErrorPage} from "../pages/error/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/*",
        element: (<Home/>),
        loader: ({params})=> {
            // TODO get data from params['*'] to data variable
            // TODO set data via:
            console.log(params["*"])
            return null
        },
        errorElement: (<ErrorPage/>)
    },
]);

