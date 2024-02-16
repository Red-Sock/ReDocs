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
        loader: async () => {
            await fetchConfig()

            let url = document.location.hash.substring(1)

            if (url === "" || url === "/") {
                url = configState.get().basicPage
            }

            if (!url?.startsWith('/')) {
                url = "/"+url
            }

            await openPage(url)

            return null
        },
        errorElement: (<ErrorPage/>)
    },
]);

