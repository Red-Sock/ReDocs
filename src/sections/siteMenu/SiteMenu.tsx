import { NodeItem } from "../../entities/node/NodeItem";

import { TreeWrapper } from "../../components/sideMenu/TreeWrapper";
import type {} from '@mui/x-tree-view/themeAugmentation';
import {ThemeProvider, createTheme} from "@mui/material";

export default function SiteMenu() {
    const openNode = function () {
        //TODO придумать как открывать страницы
    }

    let nodes = function (): NodeItem[] {
        // TODO придумать откуда брать структуру документации
        return [
            {
                name: "node 1",
                link: "https://link.to.page.ru/",
                inner: [
                    {
                        name: "node 1-1",
                        link: "https://link.to.page.ru/",
                    },
                    {
                        name: "node 1-2",
                        link: "https://link.to.page.ru/",
                    }
                ]
            }
        ]
    }();

    const theme = createTheme({
        components: {
            MuiTreeItem: {
                styleOverrides: {
                    label: {
                        fontSize: '1.5em',
                    },
                    iconContainer: {
                        width: '2em'
                    }
                },
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <TreeWrapper nodes={nodes} openNode={openNode}/>
        </ThemeProvider>
    );
}
