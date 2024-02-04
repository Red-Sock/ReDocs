import {hookstate} from '@hookstate/core';
import {NodeItem} from "../entities/node/NodeItem";

export interface PageStruct {
    lastInsertedLevel: number
    lastInsertedNode: NodeItem
    Root: NodeItem[]
}

export const pageStructState = hookstate(
    {
        lastInsertedLevel: -1,
        lastInsertedNode: {name: "Loading", link: ""},
        Root: []
    } as PageStruct)






