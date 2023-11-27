import "./Home.css";

import SidebarWrapper from "./../../sections/sidebar/SidebarWrapper";
import {ContentWrapper} from "../../sections/content/Content";

export function Home() {
    return (
        <div className="Home">
            <div className="sidebarHome">
                <SidebarWrapper/>
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
