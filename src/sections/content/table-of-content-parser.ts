import {VFileWithOutput} from "unified/lib";
import {useHookstate} from "@hookstate/core";
import {TableOfContentNode, tableOfContent} from "../../state/tableOfContentNode";
import {Toc, TocEntry} from "@stefanprobst/rehype-extract-toc";
import {NodeItem} from "../../entities/node/NodeItem";

export function collectHeadings(): (node: Node, file: VFileWithOutput<any>) => void {
    return (node: Node, file: VFileWithOutput<any>) => {

        let topLevelTocNode = {
            inner:  new Array<NodeItem>(),
        } as NodeItem

        if (!file.data.toc) {
            return
        }
        walkHeaders(topLevelTocNode, file.data.toc)

        useHookstate(tableOfContent.nodes).set(topLevelTocNode.inner)
    }
}

function walkHeaders(dst: NodeItem, src: Array<TocEntry>) {
    for (let i = 0; i < src.length; i++) {
        let current = {
            name: src[i].value,
            link: src[i].id,
            inner: new Array<NodeItem>(),
            parent: dst,
        } as NodeItem

        const children = src[i].children
        if (children) {
            walkHeaders(current, children)
        }

        dst.inner.push(current)
    }
}
