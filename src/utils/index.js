import { useCallback, useMemo, useState } from 'react';
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

  return [state, set];
};

/** Bye bye ugly string concatenation for class names! */
export const m = (...args) => args.join(' ');

/** Memo shortcut for checking if at least one of the given args are falsey */
export const useMemoFalsey = (...vars) =>
  useMemo(() => vars.reduce((prev, curr) => !prev || !curr), [vars]);

// TODO: this explanation sucks
/** Makes an object using the given colour as the background, and then finding the contrast */
export const makeColorStyles = (color, theme) => ({
  color: theme.palette.getContrastText(color),
  backgroundColor: color,
  '&:hover': { backgroundColor: color }
});

export const makeColorProps = (color, theme) => ({
  color: theme.palette.getContrastText(color),
  bgcolor: color
});

export const useColorProps = color => {
  const theme = useTheme();
  return useMemo(() => makeColorProps(color, theme), [color, theme]);
};
