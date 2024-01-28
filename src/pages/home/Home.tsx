import "./Home.css";

import SiteMenu from "../../sections/siteMenu/SiteMenu";
import ContentWrapper from "../../sections/content/Content";

import {fetchConfig} from "../../features/config/config";
import {useEffect} from "react";

export function Home() {
    useEffect(fetchConfig);

    return (
        <div className="Home">
            <div className="sidebarHome">
                <SiteMenu/>
            </div>

            <div className="contentHome">
                <ContentWrapper/>
            </div>

            <div className="sideMenuHome">
                Боковое меню со структурой страницы
            </div>
        </div>
    );
}
