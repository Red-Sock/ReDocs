import "./Home.css";

import GlobalMenu from "../../sections/siteMenu/SiteMenu";
import ContentWrapper from "../../sections/content/Content";

import React from "react";
import {SideMenu} from "../../sections/pageMenu/SideMenu";

export function Home() {
    return (
        <div className="Home">
            <div className="sidebarHome">
                <GlobalMenu/>
            </div>

            <div className="contentHome">
                <ContentWrapper/>
            </div>

            <div className="contentMenu">
                <SideMenu/>
            </div>
        </div>
    );
}
