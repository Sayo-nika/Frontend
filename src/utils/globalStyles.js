import { makeStyles } from '@material-ui/core/styles';

/**
 * Contains a set of common classes designed for reusability.
 */
const useGlobalStyles = makeStyles(theme => ({
  pageContent: {
    padding: theme.spacing(2)
  },
  buttonReset: {
    border: 'none',
    background: 'none',
    color: 'inherit',
    margin: 0,
    padding: 0,
    textDecoration: 'none',
    cursor: 'pointer'
  }
}));

export default useGlobalStyles;
