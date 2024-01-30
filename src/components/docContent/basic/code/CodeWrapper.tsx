import styles from "./CodeWrapper.module.css";

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'

import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism';

import {CopyToClipboard} from 'react-copy-to-clipboard';
import {useState} from "react";

interface CodeWrapperProps {
    content: string;
    language: string;
}

export default function CodeWrapper({content, language}: CodeWrapperProps) {
    const [isCopied, setIsCopied] = useState(false)

    const copy = function () {
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 5000)
    }

    return (
        <div
            className={styles.CodeWrapper}
        >
            <CopyToClipboard
                text={content}
                onCopy={copy}
            >
                {isCopied ?
                    <input
                        className={styles.copyWrapper}
                        type="image"
                        src={"src/assets/img/copied.svg"}
                        alt={"copied"}/> :
                    <input
                        className={styles.copyWrapper}
                        type="image"
                        src={"src/assets/img/copy.svg"}
                        alt={"copy"}/>
                }
            </CopyToClipboard>

            <SyntaxHighlighter
                PreTag="div"
                style={dracula}
                customStyle={{
                    margin: 0
                }}
                language={language}
                children={content}
                showLineNumbers={true}
            />

        </div>
    );
}
