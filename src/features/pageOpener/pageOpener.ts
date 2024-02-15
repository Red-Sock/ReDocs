import {currentContent} from "../../state/currentContent";
import {configState} from "../../state/config";

import {PageStruct, pageStructState} from "../../state/pageStruct";
import {NodeItem} from "../../entities/node/NodeItem";
import {updatePageContentMenu} from "./headerParser";

export const contentCache = new Map<string, string>()
const srcLink = configState.link

export async function openPage(id: string) {
    if (id == "") {
        return
    }

    const link = configState.get().SectionsMap.get(id)
    if (!link) {
        throw "cannot open page " + id + ": no such page in config. Error code 1"
    }

    if (!link.endsWith('.md')) {
        return
    }

    let content: string = contentCache.get(id) || ""

    if (content === "") {
        content = await fetchPage(id, link)
    }

    if (!content) {
        return
    }

    updatePageContent(id, content)
}

async function fetchPage(id: string, link: string): Promise<string> {
    return fetch(srcLink.get() + link).then(
        async r => {
            const content = await r.text()
            contentCache.set(id, content)
            return content
        })
}

function updatePageContent(id: string, content: string | undefined) {
    if (!content) {
        throw "cannot open page \"" + id + "\": no content for page. Error code 2"
    }
    if (!id.startsWith('/')) {
        id = '/' + id
    }
    window.history.replaceState(null, "", import.meta.env.BASE_URL + id)

    currentContent.set(content)
    pageStructState.set(updatePageContentMenu(content))
}
