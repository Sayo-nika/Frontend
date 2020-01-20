import {
  Paper,
  Box,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
  Snackbar
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';
import { useImmer } from 'use-immer';
import React from 'react';
import { useAsyncFn } from 'react-use';

import loginBackground from '../assets/img/login-bg.jpg';
import logo from '../assets/img/logo.svg';
import { Link, Spacer } from '../components/common';
import { useMemoFalsey, useRecaptcha, updateFromEvent } from '../utils';
import { login, setHeader } from '../utils/api';

export const background = {
  width: '100%',
  height: '100%',
  backgroundImage: `url(${loginBackground})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export const useStyles = makeStyles(theme => ({
  background,
  textField: {
    width: '100%',
    marginBottom: theme.spacing(1)
  },
  recaptchaCaption: {
    opacity: 0.65
  }
}));

const LoginPage = ({ history }) => {
  const [state, update] = useImmer({
    username: '',
    password: '',
    rememberMe: false,
    error: null,
    snackbarOpen: false
  });
  const execute = useRecaptcha();
  const eventUpdate = updateFromEvent(update);

  const [{ loading }, doLogin] = useAsyncFn(async () => {
    try {
      const recaptcha = await execute('login');
      const { token } = await login(state.username, state.password, recaptcha);

      localStorage.setItem('token', token);
      setHeader('Authorization', token);
    } catch (err) {
      update(draft => {
        draft.error = err;
        draft.snackbarOpen = true;
      });
      return;
    }
    // TODO: action for getting users/@me and cache for session so we don't need to keep querying
    // useContext
    history.push('/');
  }, [state.username, state.password]);

  const disabled = useMemoFalsey(loading, state.username, state.password);
  const { background, textField, recaptchaCaption } = useStyles();

  return (
    <div className={background}>
      <Paper>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
          p={4}
          width={450}
        >
          <img alt="Sayonika logo" height="100" src={logo} />

          <TextField
            id="username"
            label="Username"
            className={textField}
            disabled={loading}
            value={state.username}
            onChange={eventUpdate('username')}
          />
          <TextField
            id="password"
            type="password"
            label="Password"
            className={textField}
            disabled={loading}
            value={state.password}
            onChange={eventUpdate('password')}
          />

          <Box alignItems="center" display="flex" width="100%" mb={1}>
            <FormControlLabel
              label="Remember me"
              control={
                <Checkbox
                  color="secondary"
                  disabled={loading}
                  checked={state.rememberMe}
                  onChange={eventUpdate('rememberMe')}
                />
              }
            />

            <Spacer />
            <Link color="primary" to="/">
              Forgot password?
            </Link>
          </Box>

          <Box width="100%" className={recaptchaCaption} mb={2}>
            <Typography variant="caption">
              This site is protected by reCAPTCHA and the Google
              <a href="https://policies.google.com/privacy">
                Privacy Policy
              </a>{' '}
              and
              <a href="https://policies.google.com/terms">
                Terms of Service
              </a>{' '}
              apply.
            </Typography>
          </Box>

          <Button
            color="primary"
            size="large"
            variant="contained"
            disabled={disabled}
            onClick={doLogin}
          >
            Login
          </Button>

          <Box mt={1}>
            <Typography variant="caption">
              or{' '}
              <Link color="primary" to="/signup">
                sign up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Paper>

      <Snackbar
        open={state.snackbarOpen}
        autoHideDuration={7500}
        onClose={() =>
          update(draft => {
            draft.snackbarOpen = false;
          })
        }
        onExited={() =>
          update(draft => {
            draft.error = null;
          })
        }
      >
        <Alert
          elevation={6}
          severity="error"
          variant="filled"
          onClose={() =>
            update(draft => {
              draft.snackbarOpen = false;
            })
          }
        >
          {state.error && state.error.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default LoginPage;
