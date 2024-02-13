import {PageStruct} from "../../state/pageStruct";
import {NodeItem} from "../../entities/node/NodeItem";

const regXHeader = /(?<flag>#{1,6})\s+(?<content>.+)/g

interface heading {
    level: number,
    name: string
}

export function updatePageContentMenu(md: string): PageStruct {
    const arr: heading[] = Array
        .from(
            md.matchAll(regXHeader)
        )
        // @ts-ignore
        .map(({groups: {flag, content}}) => ({
            level: flag.length,
            name: content,
        } as heading))

    const newNode = {
        name: arr[0].name,
        link: arr[0].name,
    } as NodeItem

    let ps = {
        lastInsertedLevel: arr[0].level,
        lastInsertedNode: newNode,
        Root: [newNode]
    } as PageStruct


    for (let i = 1; i < arr.length; i++) {
        ps = pushToPageContent(ps, arr[i].level, arr[i].name, arr[i].name + "_" + i.toString(),)
    }

    return ps
}

function pushToPageContent(ps: PageStruct, hLevel: number, header: string, link: string): PageStruct {
    const newNode = {
        name: header,
        link: link,
    } as NodeItem

    if (!ps.Root || ps.Root.length === 0) {
        ps.Root = [newNode]
        newNode.parent = ps.lastInsertedNode

        ps.lastInsertedNode = ps.Root[0]
        ps.lastInsertedLevel = hLevel
        return ps
    }

    if (ps.lastInsertedLevel < hLevel) {
        newNode.parent = ps.lastInsertedNode

        if (!ps.lastInsertedNode.inner) {
            ps.lastInsertedNode.inner = []
        }

        ps.lastInsertedNode.inner.push(newNode)
        ps.lastInsertedNode = newNode
        ps.lastInsertedLevel = hLevel
        return ps
    }

    if (ps.lastInsertedLevel == hLevel) {

        if (!ps.lastInsertedNode.parent) {
            ps.Root.push(newNode)
            return ps
        }

        if (!ps.lastInsertedNode.parent.inner) {
            ps.lastInsertedNode.parent.inner = [newNode]
            return ps
        }

        ps.lastInsertedNode.parent.inner.push(newNode)

        newNode.parent = ps.lastInsertedNode.parent
        ps.lastInsertedNode = newNode
        return ps
    }

    let levelCounter = hLevel
    for (; ps.lastInsertedLevel > levelCounter; levelCounter--) {
        if (!ps.lastInsertedNode.parent) {
            break
        }

        ps.lastInsertedNode = ps.lastInsertedNode.parent
    }

    if (!ps.lastInsertedNode.parent) {
        ps.Root.push(newNode)
        ps.lastInsertedNode = ps.Root[ps.Root.length - 1]
        ps.lastInsertedLevel = hLevel
        return ps
    }

    if (!ps.lastInsertedNode.parent.inner) {
        ps.lastInsertedNode.parent.inner = []
    }

    ps.lastInsertedNode.parent.inner.push(newNode)
    ps.lastInsertedNode = newNode
    ps.lastInsertedLevel = hLevel

    return ps
}
