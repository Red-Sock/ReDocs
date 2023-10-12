import cls from './home.module.css';

import {useState} from "react";
import {getResourceURLs} from "../../services/file-fetcher";

export function Home() {

    const [pageContent, setPageContent] = useState(`
# Click menu on the left to select topic ->
`)

    function getContentViaLink(link: string) {
        getResourceURLs(link, setPageContent, (url: string) => {
            window.location.replace(url)
        })
    }

    return (
        <div className={cls.Home}>
            <div className={cls.sidebarWrap}>

            </div>
            <div className={cls.contentWrap}>
                {/*<Routes>*/}
                {/*    <Route path={"/*"} element={<ContentWrapper content={pageContent}/>}/>*/}
                {/*</Routes>*/}
            </div>

            <div className={cls.sideMenuWrap}>
                {/*<Sidebar setContentViaLink={getContentViaLink}/>*/}
            </div>

        </div>
    )
}
