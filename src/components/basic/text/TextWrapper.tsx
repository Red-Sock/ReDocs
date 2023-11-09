import "./TextWrapper.css";

export function TextWrapper(props: { content: string }) {
  return (
    <div className="blockWrap">
      <p className="wrapText">{props.content}</p>
    </div>
  );
}
