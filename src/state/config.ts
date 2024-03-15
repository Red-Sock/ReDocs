import {NodeItem} from "../entities/node/NodeItem";

import { hookstate } from '@hookstate/core';

export interface Config {
    tittle: string
    link: string
    basicPage: string
    sections: NodeItem[]
    sectionsMap: Map<string, string>;
}

export const configState = hookstate({
    tittle: "",
    link: "",
    basicPage: "",
    sections: [],
    sectionsMap: new Map(),
} as Config)
