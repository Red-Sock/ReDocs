import styles from "./CodeWrapper.module.css";

import SyntaxHighlighter from 'react-syntax-highlighter'
export function CodeWrapper(props: {
    content: string;
    language: string;
}) {
    return (
        <SyntaxHighlighter
            PreTag="div"
            language={props.language}
            children={props.content}
        />
        // <div className={styles.CodeWrapper}>
        //     <pre>
        //         <code
        //             dangerouslySetInnerHTML={{__html: highlightCode}}/>
        //     </pre>
        // </div>
    );
}
