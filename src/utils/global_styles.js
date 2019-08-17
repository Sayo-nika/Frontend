import { makeStyles } from '@material-ui/core/styles';

/**
 * Contains a set of common classes designed for reusability.
 */
export const useGlobalPageStyles = makeStyles(theme =>({
    /**
     * Style for basic page content.
     */
    pageContent: {
        padding: theme.spacing(2)
    }
}))
