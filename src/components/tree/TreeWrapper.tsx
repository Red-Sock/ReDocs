import './TreeWrapper.css'

import {TreeView} from "@mui/x-tree-view";

import {NodeItem} from "../../entities/node/NodeItem";

import {IconCollapsed} from "../../assets/treeIcon/IconCollapsed";
import {IconExpaned} from "../../assets/treeIcon/IconExpaned";
import {TreeNode} from "./node/TreeNode";


export function TreeWrapper(
    props: {
        nodes: NodeItem[];
        openNode(link: NodeItem): void;
    }
) {
    return (
        <div className="Sidebar">
            <div className="Content">
                <TreeView
                    aria-label="Documentation" // TODO заменить на переменную, которую будем брать откуда-то
                    defaultCollapseIcon={<IconCollapsed/>}
                    defaultExpandIcon={<IconExpaned/>}
                >
                    {
                        props.nodes.map(
                            (elem: any) => {
                                return <TreeNode
                                    node={elem}
                                    openNode={props.openNode}
                                />
                            }
                        )
                    }
                </TreeView>
            </div>
        </div>
    );
}
