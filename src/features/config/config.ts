import {configState, Config} from "../../state/config";

import {fetchViaApi} from "../../entities/api";
import {NodeItem} from "../../entities/node/NodeItem";
import {notEqual} from "node:assert";

export async function fetchConfig() {
    const configPath = import.meta.env.VITE_REDOCS_CONFIG
    if (!configPath) {
        throw "No config path. Set config via VITE_REDOCS_CONFIG environment variable"
    }

    if (configState.get().Tittle !== "") {
        return new Promise(() => {
        })
    }


    const r = await fetchViaApi<Config>(configPath)
    r.SectionsMap = new Map<string, string>()
    r.Sections = walkInner({urlName: "", link: ""}, r.Sections, r.SectionsMap)

    console.log(r.SectionsMap)

    configState.set(r)
}


function walkInner(parentInfo: {urlName: string, link: string}, nodeItems: NodeItem[], m: Map<string, string>): NodeItem[] {
    for (let i = 0; i < nodeItems.length; i++) {
        //encodeURIComponent
        const redocsURL = parentInfo.urlName + "/" + nodeItems[i].name

        m.set(redocsURL,  parentInfo.link + nodeItems[i].link)

        const inner = nodeItems[i].inner
        if (inner) {
            nodeItems[i].inner = walkInner({urlName: redocsURL, link: nodeItems[i].link}, inner, m)
        }

        nodeItems[i].link = redocsURL
    }

    return nodeItems
}
