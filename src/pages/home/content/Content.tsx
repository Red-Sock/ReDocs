import {ParseMarkdown} from "../../../features/mdParser/mdParser";

import React, {useState} from "react";

export function ContentWrapper() {

    const [getContent, setContent] = useState([<h1>loading</h1>])

    const md = `########## Hello`
    ParseMarkdown(md).then(res => setContent(res))

    return (
        <div>
            {getContent.map(v => v)}
        </div>
    )
}
