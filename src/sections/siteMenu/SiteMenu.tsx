import { NodeItem } from "../../entities/node/NodeItem";

import { TreeWrapper } from "../../components/sideMenu/TreeWrapper";
import type {} from '@mui/x-tree-view/themeAugmentation';
import {ThemeProvider, createTheme} from "@mui/material";

export default function SiteMenu() {
    let nodes = function (): NodeItem[] {
        // TODO придумать откуда брать структуру документации
        return [
            {
                name: "ReDocs example",
                link: "https://raw.githubusercontent.com/Red-Sock/ReDocs/main/",
                inner: [
                    {
                        name: "Introduction",
                        link: "/README.md"
                    },
                    {
                        name: "Usage",
                        link: "/docs",
                        inner: [
                            {
                                name: "Static sites",
                                link: "/static_site.md"
                            },
                            {
                                name: "Dynamic sites",
                                link: "/dynamic_site.md"
                            }
                        ]
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
        <ThemeProvider theme={theme}>
            <TreeWrapper
                treeName={"leftLevelTree"}
                nodes={nodes}/>
        </ThemeProvider>
    );
}
