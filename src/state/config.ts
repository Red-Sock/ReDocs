import {NodeItem} from "../entities/node/NodeItem";

import { hookstate } from '@hookstate/core';

export interface Config {
    Tittle: string
    link: string
    Sections: NodeItem[]
    SectionsMap: Map<string, string>;
}

export const configState = hookstate({
    Tittle: "",
    link: "",
    Sections: [],
    SectionsMap: new Map(),
} as Config)
