import "./Home.css";

import SidebarWrapper from "./../../sections/sidebar/SidebarWrapper";
import {ContentWrapper} from "../../sections/content/Content";

export function Home() {
    return (
        <div className="Home">
            <div className="sidebarWrap">
                <SidebarWrapper/>
            </div>

            <div className="contentWrap">
                <ContentWrapper/>
            </div>

            <div className="sideMenuWrap">
                Боковое меню со структурой страницы
            </div>
        </div>
    );
}
