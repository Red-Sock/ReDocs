import {TreeItem} from "@mui/x-tree-view";

import {NodeItem} from "../../../entities/node/NodeItem";
import {openPage} from "../../../features/pageOpener/pageOpener";

interface TreeNodeProps {
    node: NodeItem;
    parentId: string
}

export function TreeNode({node, parentId}: TreeNodeProps) {
    const id = parentId+'/'+node.name

    return (
        <TreeItem
            nodeId={id}
            key={node.name}
            label={node.name}

            onClick={() => {openPage(node.link)}}
        >
            {
                node.inner && node.inner.length > 0 ?
                    node.inner.map((c: NodeItem, idx) => {
                        return <TreeNode
                            key={id+'/'+c.name+'_'+idx}
                            parentId={id}
                            node={c}
                        />
                    }) : null
            }
        </TreeItem>
    )
}
