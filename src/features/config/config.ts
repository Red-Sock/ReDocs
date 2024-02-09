import {configState, Config} from "../../state/config";

import {fetchViaApi} from "../../entities/api";
import {NodeItem} from "../../entities/node/NodeItem";

export function fetchConfig() {
    const configPath = import.meta.env.VITE_REDOCS_CONFIG
    if (!configPath) {
        throw "No config path. Set config via VITE_REDOCS_CONFIG environment variable"
    }

    fetchViaApi<Config>(configPath).then(r => {
        r.SectionsMap = new Map<string, any>()
        walkInner("", r.Sections, r.SectionsMap)
        console.log(r.SectionsMap)
        configState.set(r)
    })
}


function walkInner(parentId: string, nodeItem: NodeItem[], m: Map<string, any>) {
    for (const ni of nodeItem) {
        const nodeId = parentId + ni.link
        m.set(nodeId, null)

        if (ni.inner) {
            walkInner(nodeId, ni.inner, m)
        }
    }
}
