import "./Home.css";

import SiteMenu from "../../sections/siteMenu/SiteMenu";
import ContentWrapper from "../../sections/content/Content";

export function Home() {
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
