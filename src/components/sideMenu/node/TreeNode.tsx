import {TreeItem} from "@mui/x-tree-view";

import {NodeItem} from "../../../entities/node/NodeItem";
import {openPage} from "../../../features/pageOpener/pageOpener";
import {State} from "@hookstate/core";

interface TreeNodeProps {
    parentId: string
    nodesState: State<NodeItem[] | undefined>;
}

export function TreeNode({parentId, nodesState}: TreeNodeProps) {
    return (
        <>
            {
                nodesState.ornull &&
                nodesState.ornull.map((nodeState: State<NodeItem>) => {
                    const node = nodeState.get()
                    parentId += '/' + node.name
                    return (
                        <TreeItem
                            nodeId={parentId}
                            key={node.name}
                            label={node.name}

                            onClick={() => {
                                openPage(node.link)
                            }}
                        >
                            {
                                node.inner && node.inner.length != 0 ?
                                <TreeNode parentId={parentId} nodesState={nodeState.inner}/> : null
                            }
                        </TreeItem>
                    )
                })
            }
        </>
    )
}
