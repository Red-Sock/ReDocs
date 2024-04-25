import cls from './ErrorPage.module.css'

import {isRouteErrorResponse, useRouteError} from "react-router-dom";
import {CopyButton} from '../../components/copyButton/copyButton';

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
                <div className={cls.errMessageContainer}>

                    <div className={cls.errMessage}>
                        <a>{errorMessage}</a>
                    </div>

                    <div className={cls.backButton}>
                        <a href={window.location.origin}>Go back</a>
                        </div>

                    <div className={cls.copyButton}>
                        <CopyButton content={errorMessage}/>
                    </div>

                </div>
            </div>
        </div>
    )
}
