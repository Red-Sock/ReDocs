
import {TreeItem} from "@mui/x-tree-view";

import {NodeItem} from "../../../entities/node/NodeItem";

export function TreeNode(props: {
    node: NodeItem,
    openNode: (node: NodeItem) => void,
}) {
    return (
        <>
            <TreeItem
                // TODO определение идентификатора ноды
                nodeId={props.node.name}
                key={props.node.name}
                label={props.node.name}
                sx={{boxSizing: "content-box", display: "inline-block"}}
                onClick={() => {
                    if (props.node.link.length != 0) {
                        props.openNode(props.node)
                    }
                }}
            >
                {
                    props.node.inner &&
                    props.node.inner.length > 0 ?
                        props.node.inner.map((c: any) => {
                            return <TreeNode
                                node={c}
                                openNode={props.openNode}
                            />
                        }) : null
                }
            </TreeItem>
        </>
    )
}
