import {NodeCollapsedIcon} from "../../assets/treeIcon/NodeCollapsedIcon";
import {NodeExpandedIcon} from "../../assets/treeIcon/NodeExpandedIcon";

import {TreeNode} from "./node/TreeNode";

import {NodeItem} from "../../entities/node/NodeItem";

import {TreeView} from "@mui/x-tree-view";
import {State, useHookstate} from "@hookstate/core";
import {EndNodeIcon} from "../../assets/treeIcon/EndNodeIcon";
import {ThemeProvider, createTheme} from "@mui/material";

interface TreeWrapperProps {
    treeName: string;
    nodesState: State<NodeItem[] | undefined>;
}

export function TreeWrapper({treeName, nodesState}: TreeWrapperProps) {
    const theme = createTheme({
        components: {
            MuiTreeItem: {
                styleOverrides: {
                    content: {
                        padding: 0,
                        display: "flex",
                        alignItems: "stretch",
                        "&.Mui-selected": {
                            backgroundColor: "var(--header-color)",
                            "&.Mui-focused": {
                                backgroundColor: "var(--header-color)",
                            }
                        },

                    },
                    iconContainer: {
                        width: '2em',
                        minHeight: '100%',
                    },
                    label: {
                        fontSize: '1.25em',
                    },
                },
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <div style={{width: "100%", height: "100%", blockSize: "fit-content", boxSizing: "content-box"}}>
                <TreeView
                    aria-label={treeName}
                    defaultCollapseIcon={<NodeCollapsedIcon/>}
                    defaultExpandIcon={<NodeExpandedIcon/>}
                    defaultEndIcon={<EndNodeIcon/>}
                >
                    <TreeNode
                        parentId={""}
                        nodesState={nodesState}
                    />
                </TreeView>
            </div>
        </ThemeProvider>
    );
}
