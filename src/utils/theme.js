import { red, orange } from '@material-ui/core/colors';
/**
 * The default Sayonika theme for Material UI components.
 */
const SayonikaTheme = {
  palette: {
    primary: {
      main: '#E84444'
    },
    secondary: {
      main: '#F99B2D'
    }
  },
  typography: {
    fontFamily: [
      'Noto Sans JP',
      'Noto Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  },
  status: {
    danger: orange[500],
    error: red[500]
  }
};

export default SayonikaTheme;
