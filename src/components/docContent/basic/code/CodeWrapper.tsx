import styles from "./CodeWrapper.module.css";

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'

import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism';

import {CopyButton} from "../../../copyButton/copyButton";

interface CodeWrapperProps {
    content: string;
    language: string;
}

export default function CodeWrapper({content, language}: CodeWrapperProps) {

    return (
        <div className={styles.CodeWrapper}>
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

            <div className={styles.copyWrapper}>
                <CopyButton content={content}/>
            </div>
        </div>
    );
}
