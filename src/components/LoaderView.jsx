import { Box, CircularProgress, Fade } from '@material-ui/core';
import React from 'react';
import { useAsync } from 'react-use';

const LoaderView = ({
  children,
  fetcher,
  height = '100%',
  width = '100%',
  throwOnError = true
}) => {
  const state = useAsync(fetcher, []);

  if (state.error && throwOnError) throw state.error;

  return (
    <>
      {!state.loading ? (
        children(state)
      ) : (
        <Box
          alignItems="center"
          display="flex"
          justifyContent="center"
          height={height}
          width={width}
        >
          <Fade style={{ transitionDelay: '1000ms' }} in>
            <CircularProgress />
          </Fade>
        </Box>
      )}
    </>
  );
};

export default LoaderView;
