import "./wrapperCode.css";
import hljs from "highlight.js";

export function WrapperCode(props: { content: string }) {
  return (
    <div>
      <pre>
        <code className="wrapCode">{props.content}</code>
      </pre>
    </div>
  );
}
