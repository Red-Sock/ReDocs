import * as React from "react";

import {createBrowserRouter} from "react-router-dom";
import {Home} from "../pages/home/Home";
import {ErrorPage} from "../pages/error/ErrorPage";
import {openPage} from "../features/pageOpener/pageOpener";

export const router = createBrowserRouter([
    {
        path: "/*",
        element: (<Home/>),
        loader: async ({params})=> {
            // TODO get data from params['*'] to data variable
            // TODO set data via:

            if (typeof params['*'] !== "string") {
                throw "unpredicted error 1"
            }

            await openPage(params['*'])
            return null
        },
        errorElement: (<ErrorPage/>)
    },
]);

