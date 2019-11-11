import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import { Button } from '../components/common';
import Showcase from '../components/Showcase';

const data = x => ({
  id: x.toString(),
  title: 'Dolor Sit Amet',
  icon: 'https://images.unsplash.com/photo-1572226372001-f4880374b677',
  banner: 'https://images.unsplash.com/photo-1536890992765-f42a1ee1e2a8',
  tagline: 'Lorem ipsum amsicit de alit. What will they do now?',
  status: 'planning',
  category: 'comedy',
  theme_color: 'deep_purple' // eslint-disable-line camelcase
});

const useStyles = makeStyles({ width: { width: '100%' } });

const EditorsChoicePage = () => {
  const [mods, setState] = React.useState(Array.from([1, 2, 3, 4], data));

  const { width } = useStyles();

  return (
    <React.Fragment>
      <Showcase title="Editor's Choice" mods={mods} />
      <Button color="primary" to="/search" variant="outlined" className={width}>
        Find More
      </Button>
    </React.Fragment>
  );
};

export default EditorsChoicePage;
