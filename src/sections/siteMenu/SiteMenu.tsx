import cls from './SiteMenu.module.css'
import type {} from '@mui/x-tree-view/themeAugmentation';

import {TreeWrapper} from "../../components/sideMenu/TreeWrapper";

import {ThemeProvider, createTheme} from "@mui/material";

import {useHookstate} from "@hookstate/core";
import {configState} from "../../state/config";
import {NodeItem} from "../../entities/node/NodeItem";

export default function SiteMenu() {
    const config = useHookstate(configState);
    const nodes = useHookstate<NodeItem[] | undefined, {}>(config.Sections)

    const theme = createTheme({
        components: {
            MuiTreeItem: {
                styleOverrides: {
                    label: {
                        fontSize: '1.25em',
                    },
                    iconContainer: {
                        width: '2em'
                    }
                },
            },
        },
    });

    return (
        <div className={cls.Container}>
            <ThemeProvider theme={theme}>
                <div className={cls.Header}>{config.get().Tittle}</div>

                <div className={cls.Tree}>
                <TreeWrapper
                    treeName={config.get().Tittle}
                    nodesState={nodes}/>
                </div>
            </ThemeProvider>
        </div>
    );
}
