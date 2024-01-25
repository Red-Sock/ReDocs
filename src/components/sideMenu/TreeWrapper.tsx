import {NodeCollapsedIcon} from "../../assets/treeIcon/NodeCollapsedIcon";
import {NodeExpanedIcon} from "../../assets/treeIcon/NodeExpanedIcon";

import {TreeNode} from "./node/TreeNode";

import {NodeItem} from "../../entities/node/NodeItem";

import {TreeView} from "@mui/x-tree-view";
import {State, useHookstate} from "@hookstate/core";

interface TreeWrapperProps {
    treeName: string;
    nodesState: State<NodeItem[] | undefined>;
}

export function TreeWrapper({treeName, nodesState}: TreeWrapperProps) {
    return (
        <TreeView
            aria-label={treeName}
            defaultCollapseIcon={<NodeCollapsedIcon/>}
            defaultExpandIcon={<NodeExpanedIcon/>}
        >
            <TreeNode
                parentId={""}
                nodesState={nodesState}
            />
        </TreeView>
    );
}
