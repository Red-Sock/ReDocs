import styles from './Content.module.css'
import './global-re-render.css'

import CodeWrapper from "../../components/docContent/basic/code/CodeWrapper";
import QuoteWrapper from "../../components/docContent/basic/quote/QuoteWrapper";
import LinkWrapper from "../../components/docContent/basic/link/LinkWrapper";

import React from "react";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import remarkHeadings from '@vcarl/remark-headings';

import {useHookstate} from "@hookstate/core";
import {currentContent} from "../../state/currentContent";

import withToc from "@stefanprobst/rehype-extract-toc"
import {collectHeadings} from "./table-of-content-parser";

export default function ContentWrapper() {
    const content = useHookstate(currentContent)

    return (
        <div className={styles.ContentWrapper}>
            <Markdown
                className="markdown-body"
                remarkPlugins={[remarkGfm, remarkHeadings]}
                rehypePlugins={[rehypeRaw, rehypeSlug, withToc, collectHeadings]}
                children={content.get().content}

                components={{
                    code({className, children}) {
                        if (!className || typeof children !== 'string') {
                            return (<code>{children}</code>)
                        }

                        return (
                            <CodeWrapper
                                content={children.toString()}
                                language={className.replace("language-", "")}
                            />
                        );
                    },

                    a: ({href, children}) => {
                        if (!href || !children) {
                            return (<a>{children}</a>)
                        }

                        if (typeof children !== "string") {
                            return (<a href={href}>{children}</a>)
                        }

                        return (
                            <LinkWrapper
                                href={href}
                                name={children}
                            />
                        )
                    },

                    blockquote: ({children}) => {
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
