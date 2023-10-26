import "./wrapperTable.css";

function WrapperTable(props: { name: string[]; value: string[][] }) {
  // function deleteHTML(e: any) {
  //   const prop: any = e;
  //   const matches: string[] = [];
  //   let match: any;
  //   const pattern = /<[^>]+>([^<]+)/g;
  //   while ((match = pattern.exec(prop)) !== null) {
  //     matches.push(match[1]);
  //     return matches;
  //   }
  //   return prop;
  // }

  return (
    <div>
      <table className="tableWrap">
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
                  return (
                    <td
                      className="tableText"
                      dangerouslySetInnerHTML={{ __html: e }}
                    />
                  );
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
