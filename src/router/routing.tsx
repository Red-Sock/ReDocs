import * as React from "react";

import {createBrowserRouter} from "react-router-dom";
import {Home} from "../pages/home/Home";
import {ErrorPage} from "../pages/error/ErrorPage";
import {openPage} from "../features/pageOpener/pageOpener";
import {fetchConfig} from "../features/config/config";
import {configState} from "../state/config";

export const router = createBrowserRouter([
    {
        path: "/*",
        element: (<Home/>),
        loader: async ({params}) => {
            await fetchConfig()

            if (!params) {
                throw "Error opening page"
            }


            if (typeof params['*'] !== "string") {
                throw "Unpredicted error 3"
            }

            if (!params['*']) {
                return null
            }

            let url = params['*']

            if (!url?.startsWith('/')) {
                url = "/"+url
            }

            if (url.startsWith(import.meta.env.BASE_URL)) {
                url = url.substring(import.meta.env.BASE_URL.length)
            }

            if (url === "" || url === "/") {
                url = configState.get().basicPage
            }

            await openPage(url)

            return null
        },
        errorElement: (<ErrorPage/>)
    },
]);

