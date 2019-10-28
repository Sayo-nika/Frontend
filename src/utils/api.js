import bent from 'bent';

import config from './config';

const qs = obj => new URLSearchParams(obj).toString();

// TODO : tokens
export const get = bent(`${config.BASE_URL}/api/v1/`, 'GET', 'json');
export const post = bent(`${config.BASE_URL}/api/v1/`, 'POST', 'json');
export const patch = bent(`${config.BASE_URL}/api/v1/`, 'PATCH', 'json');
export const del = bent(`${config.BASE_URL}/api/v1/`, 'DELETE', 'json');

export const login = (username, password, recaptcha) =>
  post('/login', { username, password, recaptcha });
export const signup = (username, email, password, recaptcha) =>
  post('/users', { username, email, password, recaptcha });

export const getMod = id => get(`/mods/${id}`);
export const getMods = (options = {}) => get('/mods', options);
export const getTrendingMods = () => get('/mods/trending');
export const getEditorsChoice = () => get('/mods/editors_choice');
export const getRecentMods = () => get('/mods/recent_releases');
export const getMostLovedMods = () => get('/mods/most_loved');
export const getMostDownloadedMods = () => get('/mods/most_downloads');
export const getModReviews = id => get(`/mods/${id}/reviews`);
export const getModAuthors = id => get(`/mods/${id}/authors`);

export const getUser = id => get(`/users/${id}`);
export const getUsers = (options = {}) => get('/users', options);
export const getUserFavorites = id => get(`/users/${id}/favorites`);
export const getUserMods = id => get(`/users/${id}/mods`);
export const getUserReviews = id => get(`/users/${id}/reviews`);

export const createMod = options => post('/mods', options);
export const createModReview = (id, title, rating, content) =>
  post(`/mods/${id}/reviews`, { title, rating, content });
export const patchSelf = (options = {}) => patch('/users/@me', options);
export const patchMod = (id, options = {}) => patch(`/mods/${id}`, options);
export const deleteMod = id => del(`/mods/${id}`);

export const reportUser = (id, content, type_, recaptcha) =>
  post(`/users/${id}/report`, { content, type_, recaptcha });
export const reportMod = (id, content, type_, recaptcha) =>
  post(`/mods/${id}/report`, { content, type_, recaptcha });

export const getNews = () => get('/news');
export const getFrontpage = () =>
  Promise.all([
    getNews(),
    getRecentMods(),
    getMostLovedMods(),
    getTrendingMods(),
    getMods({ limit: 5, status: 'in_development' })
  ]);
export const search = q => get(`/search?${qs({ q })}`);
