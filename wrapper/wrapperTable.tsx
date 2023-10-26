import "./wrapperTable.css";

function WrapperTable(props: { name: string[]; value: string[][] }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr className="tableLine">
            {props.name.map((e) => {
              return <th className="tableTitleText">{e}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {props.value.map((e) => {
            return (
              <tr className="tableLine">
                {e.map((e) => {
                  return <td className="tableText">{e}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default WrapperTable;
