import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTheme } from '@material-ui/core/styles';

/** Tries to copy given text to the clipboard. */
export const copy = async (text, forceOld) => {
  if (navigator.clipboard && !forceOld)
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('unable to write to clipboard api', err);
      return copy(text, true);
    }

  const copier = document.createElement('textarea');
  copier.value = text;

  document.body.appendChild(copier);
  copier.focus();
  copier.select();

  document.execCommand('copy');
  document.body.removeChild(copier);
};

/** Small util to make a useState that toggles a boolean no matter what. */
export const useToggle = (initial = false) => {
  const [state, setState] = useState(initial);
  const set = useCallback(() => setState(!state), [state]);

  return [state, set];
};

/** Easily set a value from an input event without fiddling around. */
export const useEventState = initial => {
  const [state, setState] = useState(initial);
  const set = useCallback(
    ev =>
      ev.target.type === 'checkbox'
        ? setState(ev.target.checked)
        : setState(ev.target.value),
    []
  );

  // Raw setState given as last because some need it
  return [state, set, setState];
};

export const useScrollTop = () => useEffect(() => window.scrollTo(0, 0), []);

/** Bye bye ugly string concatenation for class names! */
export const m = (...args) => args.join(' ');

/** Memo shortcut for checking if at least one of the given args are falsey */
export const useMemoFalsey = (...vars) =>
  useMemo(() => vars.reduce((prev, curr) => !prev || !curr), [vars]);

/** Make style properties for a given background color with contrasting font color */
export const makeColorStyles = (color, theme) => ({
  color: theme.palette.getContrastText(color),
  backgroundColor: color,
  '&:hover': { backgroundColor: color }
});

/** makeColorStyles but generates properties for use in the Box component */
export const makeColorProps = (color, theme) => ({
  color: theme.palette.getContrastText(color),
  bgcolor: color
});

/** Hook for makeColorProps to prevent needing to manually use useTheme */
export const useColorProps = color => {
  const theme = useTheme();
  return useMemo(() => makeColorProps(color, theme), [color, theme]);
};
