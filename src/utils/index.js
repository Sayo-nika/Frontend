import { useMemo } from 'react';
import { useTheme } from '@material-ui/core/styles';

export * from './hooks';

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

/** Bye bye ugly string concatenation for class names! */
export const m = (...args) => args.join(' ');

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

/** Format a given number into a shorthand string */
export const shortenAmount = amt => {
  const units = ['', 'K', 'M', 'B', 'T'];
  let formatted = amt;

  for (const unit of units)
    if (formatted / 1000 < 1 || unit === units.slice(-1)[0])
      return formatted.toFixed(2) + unit;
    else formatted /= 1000;
};

export const transition = property =>
  `${property} 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`;
