/**
 * @file Middleware for handling OAuth callbacks.
 *
 * @todo Probably implement state parameters
 */

import axios from 'axios';
import {urlencoded} from 'body-parser';
import Router from 'router';
import {redirect, wrapRouterPromise} from './common';

const router = new Router();

router.use(urlencoded({
  extended: false
}));

// If no code in the qs, redirect to root;
router.use((req, res, next) => {
  if (!req.body.code) return redirect(res, '/');
  else next();
});

router.get('/discord', require('./discord'));
router.get('/gitlab', require('./gitlab'));
router.get('/github', require('./github'));

// Final handler
router.use(wrapRouterPromise(async (req, res) => {
  if (!res.$userData) return redirect(res, '/');

  // TODO: either login user if existing user with connected account is found, or register the user.
}));

export default router;
