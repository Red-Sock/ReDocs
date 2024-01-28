import cls from './ErrorPage.module.css'

import {isRouteErrorResponse, useRouteError} from "react-router-dom";

export function ErrorPage() {
    const err = useRouteError();
    let errorMessage: string;

    if (isRouteErrorResponse(err)) {
        // error is type `ErrorResponse`
        errorMessage = err.statusText;
    } else if (err instanceof Error) {
        errorMessage = err.message;
    } else if (typeof err === 'string') {
        errorMessage = err;
    } else {
        throw err
    }

    return (
        <div className={cls.Container}>
            <div className={cls.cfContainer}/>

            <div className={cls.errMessageBox}>
                <div className={cls.errMessage}>
                    <a>{err.toString()}</a>
                </div>
                <input
                    type="image"
                    src="src/assets/img/copy.svg"
                    className={cls.copyButton}
                    alt={"Copy"}/>
            </div>

        </div>
    )
}
