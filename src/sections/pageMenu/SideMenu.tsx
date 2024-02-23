import cls from './pageMenu.module.css'

import {pageStructState} from "../../state/pageStruct";
import {useHookstate} from "@hookstate/core";

import {TreeWrapper} from "../../components/sideMenu/TreeWrapper";

import {NodeItem} from "../../entities/node/NodeItem";
import {openPage} from "../../features/pageOpener/pageOpener";

export function SideMenu() {
    const nodes =  useHookstate<NodeItem[] | undefined, {}>(pageStructState.Root)

    if (!nodes || !nodes.value || nodes.value.length === 0) {
        return (<div style={{display: "none"}}></div>)
    }

    return (
        <div className={cls.pageMenu}>
            <TreeWrapper
                treeName={"pageStruct"}
                nodesState={nodes}
            />
        </div>
    )
}
