import {hookstate} from '@hookstate/core';
import {NodeItem} from "../entities/node/NodeItem";

export interface TableOfContentNode {
    nodes: NodeItem[]
}

export const tableOfContent = hookstate({nodes: []} as TableOfContentNode)
