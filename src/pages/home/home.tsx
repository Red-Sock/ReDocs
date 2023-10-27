import cls from "./home.module.css";

import {useState} from "react";
import {getResourceURLs} from "../../services/file-fetcher";

import {WrapperList} from "../../components/wrapper/wrapList/wrapperList";

export function Home() {
    const [pageContent, setPageContent] = useState(`
# Click menu on the left to select topic ->
`);

    function getContentViaLink(link: string) {
        getResourceURLs(link, setPageContent, (url: string) => {
            window.location.replace(url);
        });
    }

    const [content, setContent] = useState<string>("");

    return (
        <div className={cls.Home}>
            <div className={cls.sidebarWrap}>Боковое меню-дерево</div>
            <div className={cls.contentWrap}>
                Контент
                {/*<Routes>*/}
                {/*    <Route path={"/*"} element={<ContentWrapper content={pageContent}/>}/>*/}
                {/*</Routes>*/}
                {content}
                <WrapperList content={[{name: "1",innerList: [{name:"3", innerList: [{name:"4"}]}]}, {name: "2"}]} isNumerated={false}/>
            </div>

            <div className={cls.sideMenuWrap}>
                Боковое меню Поп-ап
                {/*<Sidebar setContentViaLink={getContentViaLink}/>*/}
            </div>
        </div>
    );
}
