import {configState, Config} from "../../state/config";

import {fetchViaApi} from "../../entities/api";


export function fetchConfig() {
    const configPath = import.meta.env.VITE_REDOCS_CONFIG
    if (!configPath) {
        throw "No config path. Set config via VITE_REDOCS_CONFIG environment variable"
    }

    fetchViaApi<Config>(configPath).then(r => {
        console.log(r)
        configState.set(r)
    })
}


