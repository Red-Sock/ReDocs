import {TreeItem} from "@mui/x-tree-view";

import {NodeItem} from "../../../entities/node/NodeItem";
import {openPage} from "../../../features/pageOpener/pageOpener";
import {State} from "@hookstate/core";

interface TreeNodeProps {
    nodesState: State<NodeItem[] | undefined>;
    onItemClick: (nodeLink: string)=>void
}

export function TreeNode({ nodesState, onItemClick }: TreeNodeProps) {
    return (
        <>
            {
                nodesState.ornull &&
                nodesState.ornull.map((nodeState: State<NodeItem>) => {
                    const node = nodeState.get()

                    return (
                        <TreeItem
                            nodeId={node.link}
                            key={node.link}
                            label={node.name}

                            onClick={() => {
                                onItemClick(node.link)
                            }}
                            id={node.link}
                        >
                            {
                                node.inner && node.inner.length != 0 ?
                                <TreeNode nodesState={nodeState.inner} onItemClick={onItemClick}/> : null
                            }
                        </TreeItem>
                    )
                })
            }
        </>
    )
}
