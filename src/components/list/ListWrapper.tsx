import "./ListWrapper.css";

interface ListItem {
    name: string;
    innerList?: ListItem[];
}

export function ListWrapper(props: {
    content: ListItem[];
    isNumerated: boolean;
}) {
    const res = props.content.map((e, index) => {
        return (
            <li key={index} className="wrapElemList">
                {e.name}
                {e.innerList && e.innerList.length !== 0 ? (
                    <ListWrapper content={e.innerList} isNumerated={props.isNumerated}/>
                ) : (
                    <></>
                )}
            </li>
        );
    });

    return (
        <div>
            {props.isNumerated ? (
                <ol className="wrapList" children={res}/>
            ) : (
                <ul className="wrapList" children={res}/>
            )}
        </div>
    );
}
