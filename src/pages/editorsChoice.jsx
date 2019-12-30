import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import { Button } from '../components/common';
import LoaderView from '../components/LoaderView';
import Showcase from '../components/Showcase';
import { getEditorsChoice } from '../utils/api';

const useStyles = makeStyles({ width: { width: '100%' } });

const EditorsChoicePage = () => {
  const { width } = useStyles();

  return (
    <LoaderView fetcher={getEditorsChoice}>
      {({ value: mods }) => (
        <>
          <Showcase title="Editor's Choice" mods={mods} />
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

export default EditorsChoicePage;
