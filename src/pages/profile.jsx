import { Avatar, Box, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Discord, Reddit, Twitter } from 'mdi-material-ui';
import React from 'react';

import { Button, Root, Spacer } from '../components/common';
import Footer from '../components/Footer';
import LoaderView from '../components/LoaderView';
import HTTPErrorView from '../components/HTTPErrorView';
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import { getUser } from '../utils/api';

const useStyles = makeStyles(theme => ({
  headerIcon: {
    width: 256,
    height: 256,
    marginRight: theme.spacing(6)
  },
  header: {
    flex: 'initial !important'
  },
  headerInfo: {
    '& > *': {
      margin: [[theme.spacing(1), 0]]
    }
  },
  headerInfoSocial: {
    fontSize: '1.75rem',
    '& > *': {
      marginRight: theme.spacing(1)
    }
  },
  placeholder: {
    opacity: 0.75
  },
  editButton: {
    boxShadow: 'none'
  }
}));

const UserPage = ({
  match: {
    params: { id }
  }
}) => {
  const {
    editButton,
    header,
    headerInfo,
    headerInfoSocial,
    headerIcon,
    placeholder
  } = useStyles();
  const Placeholder = ({ text }) => (
    <Box
      alignItems="center"
      display="flex"
      justifyContent="center"
      width="100%"
      className={placeholder}
      py={4}
    >
      <Typography variant="body1">{text}</Typography>
    </Box>
  );

  return (
    <Root>
      <Navbar />

      {/* User header */}
      <Box flex="1">
        <LoaderView fetcher={() => getUser(id)} errorView={HTTPErrorView}>
          {({ value: {} }) => (
            <>
              <Container
                alignItems="center"
                display="flex"
                className={header}
                component={Box}
                py={8}
              >
                <Avatar
                  alt="user icon"
                  src="https://images.unsplash.com/photo-1572973785853-64e84f7a1cf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&q=80"
                  className={headerIcon}
                />

                <Box
                  display="flex"
                  flexDirection="column"
                  className={headerInfo}
                >
                  <Typography component="h1" variant="h4">
                    User Person Who Is Human
                  </Typography>
                  <Typography component="p" variant="h6">
                    Lorem ipsum dolor sit amet.
                  </Typography>
                  <Box display="flex" className={headerInfoSocial}>
                    <Twitter fontSize="inherit" />
                    <Reddit fontSize="inherit" />
                    <Discord fontSize="inherit" />
                  </Box>
                </Box>

                {/* if logged in and on own profile, show these */}
                <Spacer />
                {id === '@me' && (
                  <Button
                    color="primary"
                    to="/profile/edit"
                    variant="contained"
                    className={editButton}
                  >
                    Edit Profile
                  </Button>
                )}
              </Container>

              {/* Body */}
              <Container>
                {/* TODO: Make small cards */}
                <Showcase
                  title="Authored Mods"
                  mods={[]}
                  placeholder={
                    <Placeholder text="This user hasn't made any mods." />
                  }
                />
                <Showcase
                  title="Favourite Mods"
                  mods={[]}
                  placeholder={
                    <Placeholder text="This user hasn't favourited any mods yet 😢" />
                  }
                />
              </Container>
            </>
          )}
        </LoaderView>
      </Box>

      <Footer />
    </Root>
  );
};

export default UserPage;
