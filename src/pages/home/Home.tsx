import "./Home.css";

import GlobalMenu from "../../sections/siteMenu/SiteMenu";
import ContentWrapper from "../../sections/content/Content";

import React from "react";
import {PageContent} from "../../sections/pageMenu/PageContent";

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
                <PageContent/>
            </div>
        </div>
    );
}
