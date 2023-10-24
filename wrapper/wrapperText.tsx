import "./wrapper.css";

function WrapperText(props: string) {
  const string: string = props;

  return (
    <div className="blockWrap">
      <p className="wrapText">{string}</p>
    </div>
  );
}

export default WrapperText;
