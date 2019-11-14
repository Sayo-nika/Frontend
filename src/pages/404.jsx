import { Box, Container, Typography } from '@material-ui/core';
import React from 'react';

import { Button, Root } from '../components/common';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const NotFoundPage = () => (
  // TODO: add some colourful squiggles for niceness maybe?

  <Root>
    <Navbar />

    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      clone
    >
      <Container>
        <Typography variant="h1">404</Typography>
        <Typography component="h2" variant="h5">
          Page not found
        </Typography>

        <Box mt={8} clone>
          <Button color="primary" to="/" variant="contained">
            Go Home
          </Button>
        </Box>
      </Container>
    </Box>

    <Footer />
  </Root>
);

export default NotFoundPage;
