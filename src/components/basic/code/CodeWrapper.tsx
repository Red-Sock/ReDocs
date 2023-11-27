import "./CodeWrapper.css";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

export function CodeWrapper(props: {
    content: string;
    language?: string;
}) {
    const highlightCode = hljs.highlight(props.content, {
        language: props.language || "go",
    }).value;

    return (
        <>
            <div className={"codeWrapper"} dangerouslySetInnerHTML={{__html: highlightCode}}/>
        </>
    );
}
