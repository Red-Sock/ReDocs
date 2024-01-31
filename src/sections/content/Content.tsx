import styles from './Content.module.css'

import CodeWrapper from "../../components/docContent/basic/code/CodeWrapper";
import LinkWrapper from "../../components/docContent/basic/link/LinkWrapper";

import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {useHookstate} from "@hookstate/core";
import {currentContent} from "../../state/currentContent";

export default function ContentWrapper() {
    const content = useHookstate(currentContent)

    return (
        <div className={styles.ContentWrapper}>
            <Markdown
                remarkPlugins={[remarkGfm]}
                children={content.get()}
                components={{
                    code({className, children}) {
                        if (!className ||
                            typeof children !== 'string' ||
                            !className.startsWith("language-")) {
                            return <code>{children}</code>
                        }
                        return (
                            <CodeWrapper
                                content={children.toString()}
                                language={className.replace("language-", "")}
                            />
                        );
                    },

                    a({href, children}) {
                        if (!href || !children) {
                            return (<></>)
                        }

                        return (
                            <LinkWrapper
                                href={href}
                                name={children.toString()}
                            />
                        )
                    },

                    h1({children}) {
                        return (
                            <h1>{children}</h1>
                        )
                    },
                    h2({children}) {
                        return (
                            <h2>{children}</h2>
                        )
                    },
                    h3({children}) {
                        return (
                            <h3>{children}</h3>
                        )
                    },
                    h4({children}) {
                        return (
                            <h4>{children}</h4>
                        )
                    },
                    h5({children}) {
                        return (
                            <h5>{children}</h5>
                        )
                    },
                    h6({children}) {
                        return (
                            <h6>{children}</h6>
                        )
                    },
                }}
            />

        </div>
    )
}
