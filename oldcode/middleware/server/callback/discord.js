/**
 * @file Discord OAuth callback handler.
 */
import axios from 'axios';
import {secrets, wrapRouterPromise} from './common';

const DISCORD_BASE = 'https://discordapp.com/api/v6';
const DISCORD_TOKEN_ENDPOINT = DISCORD_BASE + '/oauth2/token';
const DISCORD_USER_ENDPOINT = DISCORD_BASE + '/users/@me';

export default wrapRouterPromise(async (req, res) => {
  const data = {
    client_id: process.env.oauth.discord,
    client_secret: secrets.discord,
    grant_type: 'authorization_code',
    code: req.body.code,
    redirect_uri: process.env.oauth.discordRedirect,
    scope: 'identify email'
  };

  const {data: {
    access_token: userToken
  }} = await axios.post(DISCORD_TOKEN_ENDPOINT, data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });

  const {data: user} = await axios.get(DISCORD_USER_ENDPOINT, {
    headers: {
      Authorization: userToken
    }
  });

  res.$userData = {
    id: user.id,
    username: user.username,
    email: user.email,
    type: 'discord'
  };
});
