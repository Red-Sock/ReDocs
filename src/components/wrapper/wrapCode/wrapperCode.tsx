import "./wrapperCode.css";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

export default function WrapperCode(props: {
  content: string;
  language: string;
}) {
  const highlightCode = hljs.highlight(props.content, {
    language: props.language,
  }).value;

  return (
    <div>
      <pre>
        <code dangerouslySetInnerHTML={{ __html: highlightCode }} />
      </pre>
    </div>
  );
}
