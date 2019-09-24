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

/**
 * Get the appropriate color from the color type.
 * @param {number} type The type of color from a mod.
 * @param {string} variant Whether the theme should be "light", "main", or "dark"
 * @param {import('@material-ui/core').Theme} theme The Material UI theme to use
 * @returns {string} The color as a string for use in CSS
 */
export function fromModColor(type, variant, theme) {
  let shade = 500;

  if (variant == 'light') shade = 100;
  else if (variant == 'main') shade = 500;
  else if (variant == 'dark') shade = 900;

  switch (type) {
    case 0:
      return theme.palette.primary[variant];
    case 1:
      return red[shade];
    case 2:
      return pink[shade];
    case 3:
      return purple[shade];
    case 4:
      return deepPurple[shade];
    case 5:
      return indigo[shade];
    case 6:
      return blue[shade];
    case 7:
      return cyan[shade];
    case 8:
      return teal[shade];
    case 9:
      return green[shade];
    case 10:
      return lime[shade];
    case 11:
      return yellow[shade];
    case 12:
      return orange[shade];
    case 13:
      return deepOrange[shade];
    default:
      return theme.palette.primary[variant];
  }
}
