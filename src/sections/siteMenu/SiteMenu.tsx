import cls from './SiteMenu.module.css'
import type {} from '@mui/x-tree-view/themeAugmentation';

import {TreeWrapper} from "../../components/sideMenu/TreeWrapper";

import {ThemeProvider, createTheme} from "@mui/material";

import {useHookstate} from "@hookstate/core";
import {configState} from "../../state/config";
import {NodeItem} from "../../entities/node/NodeItem";
import {Logo} from "../../assets/img/logo";

export default function SiteMenu() {
    const config = useHookstate(configState);
    const nodes = useHookstate<NodeItem[] | undefined, {}>(config.Sections)

    return (
        <div className={cls.Container}>
            <div className={cls.Header}>
                <div className={cls.HeaderImage}>
                    <Logo/>
                </div>

                <div className={cls.HeaderText}>
                    {config.get().Tittle}
                </div>
            </div>
            <div className={cls.Tree}>
                <TreeWrapper
                    treeName={config.get().Tittle}
                    nodesState={nodes}/>
            </div>
        </div>
    );
}
