import styles from './Content.module.css'

import CodeWrapper from "../../components/docContent/basic/code/CodeWrapper";
import LinkWrapper from "../../components/docContent/basic/link/LinkWrapper";
import QuoteWrapper from "../../components/docContent/basic/quote/QuoteWrapper";

import React, {useEffect, useState} from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {useHookstate} from "@hookstate/core";
import {pageContent} from "../../features/pageOpener/content";


export default function ContentWrapper() {
   const content = useHookstate(pageContent)

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
                    // blockquote(props) {
                    //     console.log(props)
                    //     return (
                    //         <></>
                    //     )
                    // }
                }}
            />

        </div>
    )
}
