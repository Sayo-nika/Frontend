import { useCallback, useEffect, useMemo, useState } from 'react';

/** React useState with a custom transformed set function */
export const makeCustomState = (transformer, defaultVal) => (
  initial = defaultVal
) => {
  /* eslint-disable react-hooks/rules-of-hooks */
  const [state, set] = useState(initial);
  const transformed = useCallback(value => set(transformer(value, state)), [
    state
  ]);
  /* eslint-enable */

  return [state, transformed, set];
};

/** Small util to make a useState that toggles a boolean no matter what. */
export const useToggle = makeCustomState((_, state) => !state, false);

/** Easily set a value from an input event without fiddling around. */
export const useEventState = makeCustomState(ev =>
  ev.target.type === 'checkbox' ? ev.target.checked : ev.target.value
);

export const useScrollTop = () => useEffect(() => window.scrollTo(0, 0), []);

/** Memo shortcut for checking if at least one of the given args are falsey */
export const useMemoFalsey = (...vars) =>
  useMemo(() => vars.reduce((prev, curr) => !prev || !curr), [vars]);
