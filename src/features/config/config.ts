import {configState, Config} from "../../state/config";

import {fetchViaApi} from "../../entities/api";
import {NodeItem} from "../../entities/node/NodeItem";

export async function fetchConfig(forceUpdate = false) {
    if (configState.get().tittle !== "" && !forceUpdate) {
        return
    }

    const configPath = import.meta.env.VITE_REDOCS_CONFIG
    if (!configPath) {
        throw "No config path. Set config via VITE_REDOCS_CONFIG environment variable"
    }

    if (configState.get().tittle !== "") {
        return new Promise(() => {
        })
    }


    const r = await fetchViaApi<Config>(configPath)
    r.sectionsMap = new Map<string, string>()
    r.sections = walkInner({urlName: "", link: ""}, r.sections, r.sectionsMap)


    if (!r.basicPage.startsWith("/")) {
        r.basicPage = "/" + r.basicPage
    }

    configState.set(r)
}


function walkInner(parentInfo: {
    urlName: string,
    link: string
}, nodeItems: NodeItem[], m: Map<string, string>): NodeItem[] {
    for (let i = 0; i < nodeItems.length; i++) {
        //encodeURIComponent
        let redocsURL = parentInfo.urlName + "/" + nodeItems[i].name
        redocsURL = redocsURL.replace(" ", "%20")

        m.set(redocsURL, parentInfo.link + nodeItems[i].link)

        const inner = nodeItems[i].inner
        if (inner) {
            nodeItems[i].inner = walkInner({urlName: redocsURL, link: nodeItems[i].link}, inner, m)
        }

        nodeItems[i].link = redocsURL
    }

    return nodeItems
}
