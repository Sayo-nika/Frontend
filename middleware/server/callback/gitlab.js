/**
 * @file GitLab OAuth callback handler.
 */

import axios from 'axios';
import {secrets, wrapRouterPromise} from './common';

const GITLAB_BASE = 'https://gitlab.com';
const GITLAB_TOKEN_ENDPOINT = GITLAB_BASE + '/oauth/token';
const GITLAB_USER_ENDPOINT = GITLAB_BASE + '/api/v4/user';

export default wrapRouterPromise(async (req, res) => {
  const data = {
    client_id: process.env.oauth.gitlab,
    client_secret: secrets.gitlab,
    code: req.body.code,
    grant_type: 'authorization_code',
    redirect_uri: process.env.oauth.gitlabRedirect
  };

  const {data: {
    access_token: userToken
  }} = await axios.post(GITLAB_TOKEN_ENDPOINT, data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  const {data: user} = await axios.get(GITLAB_USER_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${userToken}`
    }
  });

  res.$userData = {
    id: user.id,
    username: user.username,
    email: user.public_email,
    type: 'gitlab'
  };
});
