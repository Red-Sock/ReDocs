import "./SidebarWrapper.css";
import {NodeItem} from "../../entities/node/NodeItem";

function CollapsibleTree(props: { nodes: NodeItem[], openNode: () => void }) {
    return null;
}

export default function SidebarWrapper() {
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
