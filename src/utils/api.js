import CONFIG from './config';
import { getStorageVar } from './storage';

function createAPIFunction(path, method){
    return function(body) {
        if (method==="POST"){
            body.token = getStorageVar("token");
        }

        let headers = {
            "content-type": "application/json",
        };

        if (API.env.token){
            headers["Authorization"] = API.env.token
        }

        return fetch(
            `${CONFIG.BASE_URL}/api/${CONFIG.API_VERSION}/${path}`,
            {
                method,
                body: (method === "POST" ? body : null),
                headers
            }
        ).then(
            r=>r.json()
        ).catch(console.error)
    }
}


let API = {
    env: {},

    login: createAPIFunction("/login", "POST")
};

export default API;
