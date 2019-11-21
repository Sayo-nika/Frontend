import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  cyan,
  teal,
  green,
  lime,
  yellow,
  orange,
  deepOrange
} from '@material-ui/core/colors';

// todo: can we export theme from somewhere
export const colorMap = theme => ({
  default: theme.palette.primary,
  red,
  pink,
  purple,
  deep_purple: deepPurple, // eslint-disable-line camelcase
  indigo,
  blue,
  cyan,
  teal,
  green,
  lime,
  yellow,
  orange,
  deep_orange: deepOrange // eslint-disable-line camelcase
});

/**
 * Get the appropriate color from the color type.
 * @param {number} type The type of color from a mod.
 * @param {string} variant Whether the theme should be "light", "main", or "dark"
 * @param {import('@material-ui/core').Theme} theme The Material UI theme to use
 * @returns {string} The color as a string for use in CSS
 */
export function fromModColor(type, variant, theme) {
  if (!type) throw new Error('no type given');

  let shade = 500;

  if (variant === 'light') shade = 100;
  else if (variant === 'main') shade = 500;
  else if (variant === 'dark') shade = 900;

  // const map = colorMap(theme);
  // console.log(map);
  // console.log(type);

  return colorMap(theme)[type][shade];
}
