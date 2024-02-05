import "./Home.css";

import SiteMenu from "../../sections/siteMenu/SiteMenu";
import ContentWrapper from "../../sections/content/Content";

import {fetchConfig} from "../../features/config/config";
import React, {useEffect, useState} from "react";
import {PageMenu} from "../../sections/pageMenu/pageMenu";

export function Home() {
    useEffect(fetchConfig);

    const [getPageMenuStyle, setPageMenuStyle] = useState("")
    const [isPageContentOpen, setPageContentOpen] = useState(true)

    function clickSideMenuButton() {
        if (isPageContentOpen) {
            setPageMenuStyle("pageMenu-shown")
        } else {
            setPageMenuStyle("pageMenu-hidden")
        }

        setPageContentOpen(!isPageContentOpen)
    }

    return (
        <div className="Home">
            <div className="sidebarHome">
                <SiteMenu/>
            </div>

            <div className="contentHome">
                <ContentWrapper/>
            </div>

            <div
                className={"pageMenu "+ getPageMenuStyle}
            >
                <button className={"pageMenuButton"} onClick={clickSideMenuButton}/>
                <PageMenu />
            </div>
        </div>
    );
}
