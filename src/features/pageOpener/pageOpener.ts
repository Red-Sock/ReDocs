import {currentContent} from "../../state/currentContent";
import {configState} from "../../state/config";


export const contentCache = new Map<string, string>()
const srcLink= configState.link

export async function openPage(id: string) {
    if (id == "") {
        return
    }
    console.log(srcLink.get() + id)

    let content: string = contentCache.get(id) || ""

    if (content === "") {
        await fetch( srcLink.get() + id).then(
            r => r.text().then(r => {
                content = r
                contentCache.set(id, content)
            }))
    }

    if (content) {
        currentContent.set(content)
    } else {
        throw "cannot open page " + id + ": no such page"
    }

}

