import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import { Button } from '../components/common';
import LoaderView from '../components/LoaderView';
import Showcase from '../components/Showcase';
import { getTrendingMods } from '../utils/api';

const useStyles = makeStyles({ width: { width: '100%' } });

const TrendingPage = () => {
  const { width } = useStyles();

  return (
    <LoaderView fetcher={getTrendingMods}>
      {({ value: mods }) => (
        <>
          <Showcase title="Currently Trending" mods={mods} />
          <Button
            color="primary"
            to="/search"
            variant="outlined"
            className={width}
          >
            Find More
          </Button>
        </>
      )}
    </LoaderView>
  );
};

export default TrendingPage;
