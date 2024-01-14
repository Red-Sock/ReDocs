import './TreeWrapper.css'

import {TreeView} from "@mui/x-tree-view";

import {NodeItem} from "../../entities/node/NodeItem";
import {NodeCollapsedIcon} from "../../assets/treeIcon/NodeCollapsedIcon";

import {NodeExpanedIcon} from "../../assets/treeIcon/NodeExpanedIcon";
import {TreeNode} from "./node/TreeNode";

export function TreeWrapper(
    props: {
        nodes: NodeItem[];
        openNode(link: NodeItem): void;
    }
) {

    let id = 0;
    const next = () => { return id++ }

    return (
        <div className="Sidebar">
            <div className="Content">
                <TreeView
                    aria-label="Documentation" // TODO заменить на переменную, которую будем брать откуда-то
                    defaultCollapseIcon={<NodeCollapsedIcon/>}
                    defaultExpandIcon={<NodeExpanedIcon/>}
                >
                    {
                        props.nodes.map(
                            (elem: any) => {
                                return <TreeNode
                                    key={next()}
                                    node={elem}
                                    openNode={props.openNode}
                                    next={next}
                                />
                            }
                        )
                    }
                </TreeView>
            </div>
        </div>
    );
}
