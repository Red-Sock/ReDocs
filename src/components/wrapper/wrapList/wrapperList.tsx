import "./wrapperList.css";
interface ListItem {
  name: string;
  innerList?: ListItem[];
}
function WrapperList(props: { content: ListItem[]; isNumerated: boolean }) {
  if (props.isNumerated) {
    return (
      <div>
        <ol className="wrapList">
          {props.content.map((e, index) => {
            return (
              <li key={index} className="wrapElemList">
                {e.name}
                {e.innerList && e.innerList.length !== 0 ? (
                  <WrapperList
                    content={e.innerList}
                    isNumerated={props.isNumerated}
                  />
                ) : (
                  <></>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    );
  } else {
    return (
      <div>
        <ul className="wrapList">
          {props.content.map((e, index) => {
            return (
              <li key={index} className="wrapElemList">
                {e.name}
                {e.innerList && e.innerList.length !== 0 ? (
                  <WrapperList
                    content={e.innerList}
                    isNumerated={props.isNumerated}
                  />
                ) : (
                  <></>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default WrapperList;
// function WrapperList(props: { content: ListItem[]; isNumerated: boolean }) {
//   console.log(props);
//   const res = props.content.map((e) => {
//     return (
//       <li className="wrapElemList">
//         {e.name}
//         {e.innerList && e.innerList.length !== 0 ? (
//           <WrapperList content={e.innerList} isNumerated={props.isNumerated} />
//         ) : (
//           <></>
//         )}
//       </li>
//     );
//   });

//   return (
//     <div>
//       {props.isNumerated ? (
//         <ol className="wrapList" children={res} />
//       ) : (
//         <ul className="wrapList" children={res} />
//       )}
//     </div>
//   );
// }

// export default WrapperList;
