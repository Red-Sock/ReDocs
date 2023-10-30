import "./wrapperCode.css";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

export default function WrapperCode(props: { content: string }) {
  const highlightCode = hljs.highlightAuto(props.content).value;

  return (
    <div>
      <pre>
        <code dangerouslySetInnerHTML={{ __html: highlightCode }} />
      </pre>
    </div>
  );
}
