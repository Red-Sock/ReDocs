import cls from './SideMenu.module.css'

import {tableOfContent} from "../../state/tableOfContentNode";
import {useHookstate} from "@hookstate/core";

import {TreeWrapper} from "../../components/sideMenu/TreeWrapper";

import {NodeItem} from "../../entities/node/NodeItem";
import {openPage} from "../../features/pageOpener/pageOpener";

export function PageContent() {
    const nodes = useHookstate<NodeItem[] | undefined, {}>(tableOfContent.nodes)

    return (
        <div className={cls.pageMenu}>
            <TreeWrapper
                treeName={"pageStruct"}
                nodesState={nodes}
                onItemClick={(nodeLink: string) => {
                    const elem = document.getElementById(nodeLink)
                    if (elem) {
                        elem.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                            inline: "end",
                        })
                        elem.animate(
                            [
                                {backgroundColor: 'none'},
                                {
                                    backgroundColor: 'var(--header-color)',
                                },
                                {backgroundColor: 'none'}
                            ]
                            , {
                                duration: 250,
                                iterations: 2,
                            })
                    }
                }}
            />
        </div>
    )
}
