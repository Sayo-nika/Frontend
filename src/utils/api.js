import CONFIG from './config';
import { getStorageVar } from './storage';

function createAPIFunction(path, method) {
  return function(body, arg) {
    const headers = {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    };

    if (API.env.token) headers.Authorization = API.env.token;

    const url = `${CONFIG.BASE_URL}/api/${CONFIG.API_VERSION}/${path}`.replace(
      '{0}',
      arg
    );

    return fetch(url, {
      method,
      body: method === 'POST' ? body : undefined,
      headers
    })
      .then(r => r.json())
      .then(r => {
        console.log(r);
        return r;
      })
      .catch(console.error);
  };
}

const API = {
  env: {},

  login: createAPIFunction('login', 'POST'),
  signup: createAPIFunction('users', 'POST'),
  getUser: createAPIFunction('users/{0}', 'GET'),
  getEditorsChoiceMods: createAPIFunction('mods/editors_choice', 'GET'),
  getTrendingMods: createAPIFunction('mods/trending', 'GET'),
  getMods: createAPIFunction('mods', 'GET'),
  getMod: createAPIFunction('mods/{0}', 'GET')
};

export default API;
