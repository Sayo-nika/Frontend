import { red, orange } from '@material-ui/core/colors';
/**
 * The default Sayonika theme for Material UI components.
 */
export const Sayonitheme = {
  palette: {
    primary: {
      main: '#e84444'
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

export default Sayonitheme;
