import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link as MuiLink,
  Paper,
  TextField,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useImmer } from 'use-immer';
import React from 'react';

import logo from '../assets/img/logo.svg';
import { Link } from '../components/common';
import { m, useMemoFalsey, updateFromEvent } from '../utils';

import { background } from './login';

const useStyles = makeStyles(theme => ({
  background,
  width: {
    width: '100%'
  },
  spacingBottom: {
    marginBottom: theme.spacing(2)
  },
  spacingBottomBig: {
    marginBottom: theme.spacing(4)
  },
  spacingBottomSmall: {
    marginBottom: theme.spacing(1)
  }
}));

const SignupPage = () => {
  const [state, update] = useImmer({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    confirmEmail: '',
    agreed: false
  });
  const [loading, setLoading] = React.useState(false);
  const eventUpdate = updateFromEvent(update);
  const disabled = useMemoFalsey(
    loading,
    state.username,
    state.password,
    state.confirmPassword,
    state.email,
    state.confirmEmail,
    state.agreed
  );

  const {
    background,
    spacingBottom,
    spacingBottomBig,
    spacingBottomSmall,
    width
  } = useStyles();

  return (
    <div className={background}>
      <Paper>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
          p={6}
          width={650}
        >
          <img alt="Sayonika logo" height="100" src={logo} />
          <Typography
            color="primary"
            component="h1"
            variant="h4"
            className={spacingBottom}
          >
            Create an Account
          </Typography>

          <TextField
            id="username"
            label="Username"
            className={m(width, spacingBottomSmall)}
            disabled={loading}
            value={state.username}
            onChange={eventUpdate('username')}
          />

          <Box display="flex" width="100%" mb={2}>
            <Box flex="1" mr={2}>
              <TextField
                id="password"
                type="password"
                label="Password"
                className={spacingBottomSmall}
                disabled={loading}
                value={state.password}
                onChange={eventUpdate('password')}
              />
              <TextField
                id="confirmPassword"
                type="password"
                label="Confirm Password"
                className={spacingBottomSmall}
                disabled={loading}
                value={state.confirmPassword}
                onChange={eventUpdate('confirmPassword')}
              />
            </Box>

            <Box flex="1" ml={2}>
              <TextField
                id="email"
                type="email"
                label="Email"
                className={spacingBottomSmall}
                disabled={loading}
                value={state.email}
                onChange={eventUpdate('email')}
              />
              <TextField
                id="confirmEmail"
                type="email"
                label="Confirm Email"
                className={spacingBottomSmall}
                disabled={loading}
                value={state.confirmEmail}
                onChange={eventUpdate('confirmEmail')}
              />
            </Box>
          </Box>

          <FormControlLabel
            label={
              <span>
                I have read and agree to the{' '}
                <MuiLink
                  href="https://docs.sayonika.moe/terms-and-privacy/terms-of-service/"
                  target="_blank"
                >
                  Terms of Service
                </MuiLink>{' '}
                {/* TODO: fill this out when we can */}
                and the{' '}
                <MuiLink href="#" target="_blank">
                  Community Guidelines
                </MuiLink>
                .
              </span>
            }
            className={spacingBottomBig}
            control={
              <Checkbox
                color="secondary"
                disabled={loading}
                checked={state.agreed}
                onChange={eventUpdate('agreed')}
              />
            }
          />

          <Button
            color="primary"
            size="large"
            variant="contained"
            disabled={disabled}
            onClick={() => setLoading(true)}
          >
            Sign up
          </Button>

          <Box mt={1}>
            <Typography variant="caption">
              Got an account?{' '}
              <Link color="primary" to="/login">
                Log in
              </Link>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </div>
  );
};

export default SignupPage;
