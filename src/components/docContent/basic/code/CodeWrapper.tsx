import styles from "./CodeWrapper.module.css";

import SyntaxHighlighter from 'react-syntax-highlighter'

export default function CodeWrapper(props: {
    content: string;
    language: string;
}) {
    return (
        <div
            className={styles.CodeWrapper}
        >
            {/*TODO Styling*/}
            <SyntaxHighlighter
                PreTag="div"
                language={props.language}
                children={props.content}
                showLineNumbers={true}
            />
        </div>
    );
}
