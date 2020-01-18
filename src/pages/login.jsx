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
import React from 'react';
import { useAsyncFn } from 'react-use';

import loginBackground from '../assets/img/login-bg.jpg';
import logo from '../assets/img/logo.svg';
import { Link, Spacer } from '../components/common';
import { useEventState, useMemoFalsey, useRecaptcha } from '../utils';
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
    marginBottom: theme.spacing(3)
  },
  recaptchaCaption: {
    opacity: 0.65
  }
}));

const LoginPage = ({ history }) => {
  const [username, setUsername] = useEventState('');
  const [password, setPassword] = useEventState('');
  const [rememberMe, setRemembrance] = useEventState(false);
  const [error, setError] = React.useState(null);
  const [errorModal, setErrorModal] = React.useState(false);
  const execute = useRecaptcha();

  const [{ loading }, doLogin] = useAsyncFn(async () => {
    try {
      const recaptcha = execute('login');
      const { token } = await login(username, password, recaptcha);

      localStorage.setItem('token', token);
      setHeader('Authorization', token);
    } catch (err) {
      setError(err);
      setErrorModal(true);
      return;
    }
    // TODO: action for getting users/@me and cache for session so we don't need to keep querying
    // useContext
    history.push('/');
  }, [username, password]);

  const disabled = useMemoFalsey(loading, username, password);
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

          <Snackbar
            open={!!errorModal}
            autoHideDuration={7500}
            onClose={() => setErrorModal(false)}
            onExited={() => setError(null)}
          >
            <Alert
              elevation={6}
              severity="error"
              variant="filled"
              onClose={() => setErrorModal(false)}
            >
              {error && error.message}
            </Alert>
          </Snackbar>

          <TextField
            id="username"
            label="Username"
            className={textField}
            disabled={loading}
            value={username}
            onChange={setUsername}
          />
          <TextField
            id="password"
            type="password"
            label="Password"
            className={textField}
            disabled={loading}
            value={password}
            onChange={setPassword}
          />

          <Box alignItems="center" display="flex" width="100%" mb={2}>
            <FormControlLabel
              label="Remember me"
              control={
                <Checkbox
                  color="secondary"
                  disabled={loading}
                  checked={rememberMe}
                  onChange={setRemembrance}
                />
              }
            />

            <Spacer />
            <Link color="primary" to="/">
              Forgot password?
            </Link>
          </Box>

          <Box width="100%" className={recaptchaCaption}>
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
    </div>
  );
};

export default LoginPage;
