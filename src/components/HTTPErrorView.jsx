import { Box, Typography } from '@material-ui/core';
import React from 'react';

const HTTPErrorView = ({ message = 'Not found', ...state }) => {
  console.log('error state', state);

  return (
    <Box
      alignItems="center"
      display="flex"
      height="100%"
      justifyContent="center"
      width="100%"
    >
      <Typography component="h1" variant="h3">
        {message}
      </Typography>
    </Box>
  );
};

export default HTTPErrorView;
