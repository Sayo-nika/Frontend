import { Box, CircularProgress, Fade } from '@material-ui/core';
import React from 'react';
import { useAsyncFn } from 'react-use';
import useIsInViewport from 'use-is-in-viewport';

const Spinner = ({ fetch }) => {
  React.useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <Fade style={{ transitionDelay: '1000ms' }} in>
      <CircularProgress />
    </Fade>
  );
};

const LoaderView = ({
  children,
  fetcher,
  height = '100%',
  width = '100%',
  throwOnError = true,
  delay = false,
  errorView: ErrorView
}) => {
  const [state, fetch] = useAsyncFn(fetcher, []);
  const [isInViewport, ref] = useIsInViewport();

  if (state.error && throwOnError && !ErrorView) throw state.error;

  return (
    <div ref={ref} style={{ display: 'contents' }}>
      {state.error && ErrorView ? (
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
          {(!delay || isInViewport) && <Spinner fetch={fetch} />}
        </Box>
      )}
    </div>
  );
};

export default LoaderView;
