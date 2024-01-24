import {NodeCollapsedIcon} from "../../assets/treeIcon/NodeCollapsedIcon";
import {NodeExpanedIcon} from "../../assets/treeIcon/NodeExpanedIcon";

import {TreeNode} from "./node/TreeNode";

import {NodeItem} from "../../entities/node/NodeItem";

import {TreeView} from "@mui/x-tree-view";

interface TreeWrapperProps {
    treeName: string;
    nodes: NodeItem[];
}

export function TreeWrapper({treeName, nodes}: TreeWrapperProps) {
    return (
        <TreeView
            aria-label={treeName}
            defaultCollapseIcon={<NodeCollapsedIcon/>}
            defaultExpandIcon={<NodeExpanedIcon/>}
        >
            {
                nodes.map(
                    (e: NodeItem, i: number) => {
                        return <TreeNode
                            key={e.name+'_'+i}
                            parentId={treeName}
                            node={e}
                        />
                    }
                )
            }
        </TreeView>
    );
}
