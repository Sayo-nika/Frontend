/**
 * @file GitHub OAuth callback handler.
 */

import axios from 'axios';
import {secrets, wrapRouterPromise} from './common';

const GITHUB_BASE = 'https://api.github.com';
const GITHUB_TOKEN_ENDPOINT = 'https://github.com/login/oauth/access_token';
const GITHUB_USER_ENDPOINT = GITHUB_BASE + '/user';

export default wrapRouterPromise(async (req, res) => {
  const data = {
    client_id: process.env.oauth.github,
    client_secret: secrets.github,
    code: req.body.code,
    redirect_uri: process.env.oauth.githubRedirect
  };

  const {data: {
    access_token: userToken
  }} = await axios.post(GITHUB_TOKEN_ENDPOINT, data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  const {data: user} = await axios.get(GITHUB_USER_ENDPOINT, {
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${userToken}`
    }
  });

  res.$userData = {
    id: user.id,
    username: user.login,
    email: user.email,
    type: 'github'
  };
});
