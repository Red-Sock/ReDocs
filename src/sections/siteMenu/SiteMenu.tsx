import cls from './SiteMenu.module.css'
import type {} from '@mui/x-tree-view/themeAugmentation';

import {TreeWrapper} from "../../components/sideMenu/TreeWrapper";


import {useHookstate} from "@hookstate/core";
import {configState} from "../../state/config";
import {NodeItem} from "../../entities/node/NodeItem";
import {Logo} from "../../assets/img/logo";
import {currentContent} from "../../state/currentContent";
import React, {useEffect} from "react";
import {openPage} from "../../features/pageOpener/pageOpener";

export default function SiteMenu() {
    const config = useHookstate(configState);
    const nodes = useHookstate<NodeItem[], {}>(config.sections)

    const [expanded, setExpanded] = React.useState<string[]>([]);
    const [selected, setSelected] = React.useState<string>('');

    const currentPage = useHookstate(currentContent.openedPage);

    useEffect(() => {
        let curPage = currentPage.get()
        setSelected(curPage)

        let curPagePath = curPage.split('/').splice(1)
        curPagePath = curPagePath.map(e => '/' + e)
        setExpanded(curPagePath)

    }, []);

    const handleToggle = (event: React.SyntheticEvent, nodeIds: string[]) => {
        setExpanded(nodeIds)
    };

    const handleSelect = (event: React.SyntheticEvent, nodeIds: string) => {
        setSelected(nodeIds)
    };

    return (
        <div className={cls.Container}>
            <div className={cls.Header}>
                <div className={cls.HeaderImage}>
                    <Logo/>
                </div>

                <div className={cls.HeaderText}>
                    {config.get().tittle}
                </div>
            </div>
            <div className={cls.Tree}>
                <TreeWrapper
                    treeName={config.get().tittle}
                    nodesState={nodes}
                    expanded={expanded}
                    selected={selected}
                    handleToggle={handleToggle}
                    handleSelect={handleSelect}
                    onItemClick={openPage}
                />
            </div>
        </div>
    );
}
