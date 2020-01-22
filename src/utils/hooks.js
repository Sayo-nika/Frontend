import { useContext, useEffect, useMemo } from 'react';
import useRecaptchaHook from 'react-recaptcha-hook';
import { useHistory } from 'react-router-dom';
import { useMediatedState } from 'react-use';

import config from './config';
import UserContext from './context';

/** Easily set a value from an input event without fiddling around */
export const useEventState = initial =>
  useMediatedState(
    ev => (ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value),
    initial
  );

export const useScrollTop = () => useEffect(() => window.scrollTo(0, 0), []);

/** Memo shortcut for checking if at least one of the given args are falsey */
export const useMemoFalsey = (...vars) =>
  useMemo(() => vars.reduce((prev, curr) => !curr || prev), [vars]);

/** Reusable recaptcha hook with preset options */
export const useRecaptcha = () =>
  useRecaptchaHook({ siteky: config.CAPTCHA_KEY, hideDefaultBadge: true });

export const useNeedsLogin = () => {
  const { user } = useContext(UserContext);
  const history = useHistory();

  if (!user) history.push('/login');
};

export const useNoLogin = () => {
  const { user } = useContext(UserContext);
  const history = useHistory();

  if (user) history.push('/');
};

export const useIsLoggedIn = () => !!useContext(UserContext).user;
