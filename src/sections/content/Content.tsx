import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import React, {useEffect, useState} from "react";

import {CodeWrapper} from "../../components/basic/code/CodeWrapper";

import './Content.css'

export function ContentWrapper() {
    const [getContent, setContent] = useState(`# loading...`)

    useEffect(() => {
        setContent(`
# A demo of \`react-markdown\`

\`react-markdown\` is a markdown component for React.

👉 Changes are re-rendered as you type.

👈 Try writing some markdown on the left.

## Overview

* Follows [CommonMark](https://commonmark.org)
* Optionally follows [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual React elements instead of using \`dangerouslySetInnerHTML\`
* Lets you define your own components (to render \`MyHeading\` instead of \`'h1'\`)
* Has a lot of plugins
`)
    }, []);

    return (
        <div className={"contentWrapper"}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                children={getContent}
                components={{
                    code({className,  children}) {
                        if (!className || typeof children !== 'string') {
                            return <code >{children}</code>
                        }
                        return (
                            <CodeWrapper
                                content={children.toString()}
                                language={className.replace("language-", "")}
                            />
                        );
                    },
                }}
            />

        </div>
    )
}
