
export function getStorageVar(varname){
    return window.sessionStorage[varname] ? window.sessionStorage[varname] : window.localStorage[varname]
}

export function setStorageVar(varname, value){
    let storage = window.sessionStorage[varname] ? window.sessionStorage : window.localStorage;
    storage[varname] = value
}
