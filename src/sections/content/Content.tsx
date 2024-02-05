import styles from './Content.module.css'
import './global-re-render.css'

import CodeWrapper from "../../components/docContent/basic/code/CodeWrapper";
import QuoteWrapper from "../../components/docContent/basic/quote/QuoteWrapper";
import LinkWrapper from "../../components/docContent/basic/link/LinkWrapper";

import React, {useEffect, useState} from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'

import {useHookstate} from "@hookstate/core";
import {currentContent} from "../../state/currentContent";


export default function ContentWrapper() {
    const content = useHookstate(currentContent)

    return (
        <div className={styles.ContentWrapper}>
            <Markdown
                className="markdown-body"
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw,rehypeSlug]}
                children={content.value}
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
                            return (<a>{children}</a>)
                        }

                        if (typeof  children !== "string") {
                            return (<a href={href}>{children}</a>)
                        }

                        return (
                            <LinkWrapper
                                href={href}
                                name={children}
                            />
                        )
                    },

                    h1({children}) {
                        if (!children || typeof children !== "string") {
                            return <></>
                        }

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

                    blockquote({children}) {
                        if (!children) {
                            return <></>
                        }

                        if (Array.isArray(children)) {
                            return (<QuoteWrapper content={children[1].props.children}/>)
                        }

                        return <></>
                    },
                }}
            />
        </div>
    )
}
