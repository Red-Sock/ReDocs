import "./Home.css";

import SidebarWrapper from "./sidebar/SidebarWrapper";

export function Home() {
    return (
        <div className="Home">
            <div className="sidebarWrap">
                Боковое меню со структурой документа
                <SidebarWrapper/>
            </div>

            <div className="contentWrap">
                Контент (done)
            </div>

            <div className="sideMenuWrap">
                Боковое меню со структурой страницы
            </div>
        </div>
    );
}
