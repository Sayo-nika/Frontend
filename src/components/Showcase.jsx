import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import ModCard from './ModCard';

const useShowcaseStyles = makeStyles(theme => ({
  sectionHeading: {
    paddingBottom: theme.spacing(3)
  }
}));

const Showcase = ({
  mods,
  title,
  placeholder = <Typography>Just us and these clowns.</Typography>
}) => {
  const { sectionHeading } = useShowcaseStyles();
  return (
    <Box component="section" pb={4}>
      <Typography variant="h4" component="h2" className={sectionHeading}>
        {title}
      </Typography>

      <Grid spacing={2} container>
        {mods && mods.length
          ? mods.map(mod => (
              <Grid key={mod.id} xs={12} md={6} lg={3} item>
                <ModCard {...mod} />
              </Grid>
            ))
          : placeholder}
      </Grid>
    </Box>
  );
};

export default Showcase;
