import * as React from "react";

import {createBrowserRouter} from "react-router-dom";
import {Home} from "../pages/home/Home";
import {ErrorPage} from "../pages/error/ErrorPage";
import {openPage} from "../features/pageOpener/pageOpener";
import {fetchConfig} from "../features/config/config";

await fetchConfig()
export const router = createBrowserRouter([
    {
        path: "/*",
        element: (<Home/>),
        loader: ({params})=> {
            // TODO get data from params['*'] to data variable
            // TODO set data via:
            // console.log(params['*'])
            // if (!params){
            //     throw "Error opening page"
            // }
            //
            // if (typeof params['*'] !== "string") {
            //     throw "Unpredicted error 3"
            // }
            //
            // const uri = params['*']
            //
            // openPage(uri)
            //
            return null
        },
        errorElement: (<ErrorPage/>)
    },
]);

