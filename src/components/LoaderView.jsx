import { Box, CircularProgress, Fade } from '@material-ui/core';
import React from 'react';
import { useAsync } from 'react-use';

const LoaderView = ({
  children,
  fetcher,
  height = '100%',
  width = '100%',
  throwOnError = true,
  errorView: ErrorView,
  watch = []
}) => {
  const state = useAsync(fetcher, []);

  // Rerender the component when any "watch" variable change. Useful for refetching on data change.
  React.useEffect(() => {}, watch);

  if (state.error && throwOnError && !ErrorView) throw state.error;

  return state.error && ErrorView ? (
    <ErrorView {...state} />
  ) : !state.loading && state.value ? (
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
  );
};

export default LoaderView;
