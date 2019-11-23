import {
  Box,
  InputAdornment,
  Tab as MuiTab,
  Tabs,
  TextField,
  Toolbar
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';

const Tab = withStyles({
  root: {
    minWidth: 'inherit'
  }
})(props => <MuiTab {...props} component={Link} />);

const useStyles = makeStyles({
  root: {
    padding: [[0, 0, 8]]
  },
  tabs: {
    flexGrow: 1
  }
});

const tabIndicies = [
  // path-to-regexp matches `/` as undefined for our path matcher so that's whuat this is for
  undefined,
  'editors_choice',
  'trending',
  'search'
];

const CatalogBar = () => {
  const history = useHistory();
  const { params } = useRouteMatch('/(editors_choice|trending|search)?');
  const [tab, _set] = React.useState(tabIndicies.indexOf(params[0]));

  const setTab = React.useCallback((_, value) => _set(value), []);
  const search = React.useCallback(
    ev => {
      if (ev.key === 'Enter') {
        history.push(`/search?${new URLSearchParams({ q: ev.target.value })}`);
        _set(3);
      }
    },
    [history]
  );

  const { root, tabs } = useStyles();

  return (
    <Box mb={2}>
      <Toolbar className={root} variant="regular">
        <div className={tabs}>
          <Tabs value={tab} onChange={setTab}>
            <Tab label="Home" to="/" />
            <Tab label="Editor's Choice" to="/editors_choice" />
            <Tab label="Trending" to="/trending" />
            <Tab label="Browse All" to="/search" />
          </Tabs>
        </div>
        {params[0] !== 'search' && (
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
            inputProps={{
              onKeyDown: search
            }}
          />
        )}
      </Toolbar>
    </Box>
  );
};

export default CatalogBar;
