import { Box, Button, Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GithubCircle, Twitter } from 'mdi-material-ui';
import React from 'react';

import pic from '../assets/img/maintenance-half.png';
import { Spacer } from '../components/common';
import { useColorProps } from '../utils';

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: '10rem',
    marginBottom: theme.spacing(4)
  },
  complainLinks: {
    margin: [[0, theme.spacing(0.5)]]
  },
  mascot: {
    maxWidth: '100%',
    height: 'auto',
    position: 'absolute',
    bottom: -16
  },
  mascotWrapper: {
    position: 'relative'
  },
  normalBottom: {
    marginBottom: '0 !important'
  }
}));

const ErrorPage = () => {
  const colorProps = useColorProps('#E84444');
  const {
    complainLinks,
    mascot,
    mascotWrapper,
    normalBottom,
    title
  } = useStyles();

  return (
    <Box height="100%" width="100%">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        height="50%"
        pl={16}
        {...colorProps}
      >
        <Typography variant="h1" className={title}>
          Oops
        </Typography>
        <Typography component="h2" variant="h3">
          An Error Occurred
        </Typography>
      </Box>

      <Box height="50%" px={16} pt={8}>
        <Box height="100%" className={normalBottom} clone>
          <Grid spacing={4} container>
            <Box
              alignItems="center"
              display="flex"
              flexDirection="column"
              clone
            >
              <Grid xs={4} item>
                <Typography component="h3" variant="h4" paragraph>
                  We snagged a few wires.
                </Typography>
                <Typography component="p" variant="h6">
                  We've (hopefully) logged this error and should be able to fix
                  it soon™️
                </Typography>

                <Spacer />
                <Button
                  color="primary"
                  href="/"
                  size="large"
                  variant="outlined"
                >
                  Go Home
                </Button>
                <Spacer />
              </Grid>
            </Box>

            <Box
              alignItems="center"
              display="flex"
              flexDirection="column"
              clone
            >
              <Grid className={mascotWrapper} xs={4} item>
                <img className={mascot} src={pic} />
              </Grid>
            </Box>

            <Box
              alignItems="center"
              display="flex"
              flexDirection="column"
              clone
            >
              <Grid xs={4} item>
                <Spacer />

                <Typography component="h3" variant="h5" paragraph>
                  Let us know
                </Typography>
                <div>
                  <Link
                    color="inherit"
                    href="https://twitter.com/SayonikaDDLC"
                    className={complainLinks}
                  >
                    <Twitter fontSize="large" />
                  </Link>

                  <Link
                    color="inherit"
                    href="https://github.com/Sayo-nika/Sayonika"
                    className={complainLinks}
                  >
                    <GithubCircle fontSize="large" />
                  </Link>
                </div>

                <Spacer />
              </Grid>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ErrorPage;
