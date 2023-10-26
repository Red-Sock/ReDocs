import "./wrapper.css";

function WrapperText(props: { content: string }) {
  return (
    <div className="blockWrap">
      <p className="wrapText">{props.content}</p>
    </div>
  );
}

export default WrapperText;
