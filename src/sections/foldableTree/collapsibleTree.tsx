import cls from './sidebar.module.css'

import {TreeView} from "@mui/x-tree-view";

import {FoldedIcon} from '../../components/tree/foldedIcon';
import {UnfoldedIcon} from '../../components/tree/unfoldedIcon';

import {NodeItem} from "../../components/tree/node";

import {Node} from "../../components/tree/node";

export function CollapsibleTree(
    props: {
        nodes: NodeItem[];
        openNode(link: NodeItem): void;
    }
) {
    return (
        <div className={cls.Sidebar}>
            <div className={cls.Content}>
                <TreeView
                    aria-label="Documentation" // TODO заменить на переменную, которую будем брать откуда-то
                    defaultCollapseIcon={<FoldedIcon/>}
                    defaultExpandIcon={<UnfoldedIcon/>}
                >
                    {
                        props.nodes.map(
                            (elem: any) => {
                                return <Node
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
