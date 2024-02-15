import "./Home.css";

import SiteMenu from "../../sections/siteMenu/SiteMenu";
import ContentWrapper from "../../sections/content/Content";

import React from "react";
import {PageMenu} from "../../sections/pageMenu/pageMenu";

export function Home() {
    return (
        <div className="Home">
            <div className="sidebarHome">
                <SiteMenu/>
            </div>

            <div className="contentHome">
                <ContentWrapper/>
            </div>

            <div className="contentMenu">
                <PageMenu/>
            </div>
        </div>
    );
}
