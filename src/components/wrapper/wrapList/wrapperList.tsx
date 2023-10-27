import "./wrapperList.css";

function WrapperList(props: {
  list: [
    {
      content: string[];
    }
  ];
  isNumerated: boolean;
}) {
  if (props.isNumerated) {
    return (
      <div>
        <ol className="wrapList">
          {props.list.map((e) => {
            return <li className="wrapElemList">{e.content}</li>;
          })}
        </ol>
      </div>
    );
  } else {
    return (
      <div>
        <ul className="wrapList">
          {props.list.map((e) => {
            return <li className="wrapElemList">{e.content}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default WrapperList;
