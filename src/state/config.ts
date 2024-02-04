import {NodeItem} from "../entities/node/NodeItem";

import { hookstate } from '@hookstate/core';

export interface Config {
    Tittle: string
    link: string
    Sections: NodeItem[]
}

export const configState = hookstate({
    Tittle: "",
    link: "",
    Sections: []
} as Config)
