import "./wrapperList.css";

interface ListItem {
    name: string;
    innerList?: ListItem[];
}

export function WrapperList(props: {
    content: ListItem[];
    isNumerated: boolean;
}) {
    const res = props.content.map((e) => {
        return <li className="wrapElemList">
            {e.name}
            {e.innerList && e.innerList.length !== 0 ?
                <WrapperList content={e.innerList} isNumerated={props.isNumerated}/> : <></>}
        </li>
    })

    return <div>
        {
            props.isNumerated ?
                <ol className="wrapList" children={res}/>
                :
                <ul className="wrapList" children={res}/>
        }
    </div>
}
