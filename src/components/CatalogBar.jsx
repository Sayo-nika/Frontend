import React from 'react';
import {
  Box,
  Toolbar,
  Link,
  TextField,
  InputAdornment
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    padding: [[0, 0, 8]]
  },
  links: {
    flexGrow: 1
  },
  link: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  }
}));

const CatalogBar = () => {
  const classes = useStyles();

  return (
    <Box mb={2}>
      <Toolbar className={classes.root} variant="regular">
        <div className={classes.links}>
          <Link className={classes.link} href="/index">
            Home
          </Link>
          <Link className={classes.link} href="/editors_choice">
            Editor's Choice
          </Link>
          <Link className={classes.link} href="/trending">
            Trending
          </Link>
          <Link className={classes.link} href="/all">
            Browse All
          </Link>
        </div>
        <TextField
          variant="outlined"
          label="Search"
          margin="dense"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </Toolbar>
    </Box>
  );
};

export default CatalogBar;
