import bent from 'bent';

import config from './config';

const qs = obj => new URLSearchParams(obj).toString();
/** Higher-order-function to transform API responses into just their results */
const unpack = request => (...args) => request(...args).then(re => re.result);

const apiBase = `${config.BASE_URL}/api/v1/`;
const headers = {};
export const setHeader = (name, value) => void (headers[name] = value);

export const get = unpack(bent(apiBase, 'GET', 'json', headers));
export const post = unpack(bent(apiBase, 'POST', 'json', headers));
export const patch = unpack(bent(apiBase, 'PATCH', 'json', headers));
export const del = unpack(bent(apiBase, 'DELETE', 'json', headers));

export const login = (username, password, recaptcha) =>
  post('/login', { username, password, recaptcha });
export const signup = (username, email, password, recaptcha) =>
  post('/users', { username, email, password, recaptcha });

export const getMod = id => get(`mods/${id}`);
export const getMods = (options = {}) => get(`mods?${qs(options)}`);
export const getTrendingMods = () => get('mods/trending');
export const getEditorsChoice = () => get('mods/editors_choice');
export const getRecentMods = () => get('mods/recent_releases');
export const getMostLovedMods = () => get('mods/most_loved');
export const getMostDownloadedMods = () => get('mods/most_downloads');
export const getModReviews = id => get(`mods/${id}/reviews`);
export const getModAuthors = id => get(`mods/${id}/authors`);

export const getUser = id => get(`users/${id}`);
export const getUsers = (options = {}) => get('users', options);
export const getUserFavorites = id => get(`users/${id}/favorites`);
export const getUserMods = id => get(`users/${id}/mods`);
export const getUserReviews = id => get(`users/${id}/reviews`);

export const createMod = options => post('mods', options);
export const createModReview = (id, title, rating, content) =>
  post(`mods/${id}/reviews`, { title, rating, content });
export const patchSelf = (options = {}) => patch('users/@me', options);
export const patchMod = (id, options = {}) => patch(`mods/${id}`, options);
export const deleteMod = id => del(`mods/${id}`);

export const reportUser = (id, content, type_, recaptcha) =>
  post(`users/${id}/report`, { content, type_, recaptcha });
export const reportMod = (id, content, type_, recaptcha) =>
  post(`mods/${id}/report`, { content, type_, recaptcha });

export const getNews = () => get('news');
export const getFrontpage = () =>
  Promise.all([
    getNews(),
    getRecentMods(),
    getMostLovedMods(),
    getTrendingMods(),
    getMods({ limit: 5, status: 'in_development' })
  ]);
export const search = q => get(`search?${qs({ q })}`);
