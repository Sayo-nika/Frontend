import CONFIG from './config';
import { getStorageVar } from './storage';

function createAPIFunction(path, method){
    return function(body) {
        if (method==="POST"){
            body.token = getStorageVar("token");
        }

        return fetch(
            `${CONFIG.BASE_URL}/api/${CONFIG.API_VERSION}/${path}`,
            {
                method,
                body: (method === "POST" ? body : null),
                headers: {
                    "content-type": "application/json",
                    "Authorization": API.env.token
                }
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
