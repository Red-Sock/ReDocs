import {TreeItem} from "@mui/x-tree-view";

export interface NodeItem {
    name: string;
    link: string;
    inner?: NodeItem[];
}

export function Node(props: {
    node: NodeItem,
    openNode: (node: NodeItem) => void,
}) {
    let counter = 1;
    const nextNodeId = function (): string {
        return props.node.name + (counter++).toString()
    }

    const nodeId = nextNodeId()

    return (
        <>
            <TreeItem nodeId={nodeId}
                      key={nodeId}
                      label={props.node.name}
                      sx={{boxSizing: "content-box", display: "inline-block"}}
                      onClick={() => {
                          if (props.node.link.length != 0) {
                              props.openNode(props.node)
                          }
                      }
                      }>
                {
                    props.node.inner &&
                    props.node.inner.length > 0 ?
                        props.node.inner.map((c: any) => {
                            return <Node
                                node={c}
                                openNode={props.openNode}
                            />
                        }) : null
                }
            </TreeItem>
        </>
    )
}

