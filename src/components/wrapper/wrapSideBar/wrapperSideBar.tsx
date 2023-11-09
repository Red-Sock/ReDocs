import "./wrapperSideBar.css";

import {CollapsibleTree} from "../../../sections/foldableTree/collapsibleTree";

import {NodeItem} from "../../tree/node";

export default function WrapperSideBar() {
    const openNode = function () {
        //TODO придумать как открывать страницы
    }

    let nodes = function (): NodeItem[] {
        // TODO придумать откуда брать структуру документации
        return [
            {
                name: "node 1",
                link: "https://link.to.page.ru/",
                inner: [
                    {
                        name: "node 1-1",
                        link: "https://link.to.page.ru/",
                    },
                    {
                        name: "node 1-2",
                        link: "https://link.to.page.ru/",
                    }
                ]
            }
        ]
    }();

    return (
        <div className="wrapperSideBar">
            <CollapsibleTree nodes={nodes} openNode={openNode}/>
        </div>
    );
}
