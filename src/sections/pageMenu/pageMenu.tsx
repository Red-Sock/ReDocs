import cls from './pageMenu.module.css'

import {pageStructState} from "../../state/pageStruct";
import {useHookstate} from "@hookstate/core";

import {TreeWrapper} from "../../components/sideMenu/TreeWrapper";

import {NodeItem} from "../../entities/node/NodeItem";

export function PageMenu() {
    const nodes =  useHookstate<NodeItem[] | undefined, {}>(pageStructState.Root)

    return (
        <div className={cls.pageMenu}>
            <TreeWrapper
                treeName={"pageStruct"}
                nodesState={nodes}/>
        </div>
    )
}
