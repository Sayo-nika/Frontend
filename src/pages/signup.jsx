import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Checkbox,
  FormControlLabel,
  Link as MuiLink,
  Paper,
  TextField,
  Typography,
  Snackbar
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';
import { useImmer } from 'use-immer';
import React from 'react';
import { useAsyncFn } from 'react-use';

import logo from '../assets/img/logo.svg';
import { Link } from '../components/common';
import {
  m,
  useMemoFalsey,
  useNoLogin,
  useRecaptcha,
  updateFromEvent
} from '../utils';
import { signup } from '../utils/api';

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

const SignupPage = ({ history }) => {
  useNoLogin();

  const [state, update] = useImmer({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    confirmEmail: '',
    agreed: false,
    error: null,
    snackbarOpen: false
  });
  const eventUpdate = updateFromEvent(update);
  const execute = useRecaptcha();
  const emailRef = React.useRef(null);
  const emailConfirmRef = React.useRef(null);

  const [{ loading, value: openDialog }, doSignup] = useAsyncFn(async () => {
    try {
      const recaptcha = await execute('signup');
      await signup(state.username, state.email, state.password, recaptcha);
    } catch (err) {
      update(draft => {
        draft.error = err;
        draft.snackbarOpen = true;
      });
      return false;
    }

    return true;
  });

  const validate = {
    password:
      state.password &&
      state.password.length < 8 &&
      'Password must be longer than 8 characters.',
    confirmPassword:
      state.confirmPassword &&
      state.confirmPassword !== state.password &&
      'Passwords must match.',
    email: emailRef.current && emailRef.current.validationMessage,
    emailConfirm:
      (emailConfirmRef.current && emailConfirmRef.current.validationMessage) ||
      (state.confirmEmail &&
        state.confirmEmail !== state.email &&
        'Emails must match.')
  };
  const toErrProps = validator => ({
    error: !!validator,
    helperText: validator
  });

  const disabled = useMemoFalsey(
    loading,
    state.username,
    state.password,
    state.confirmPassword,
    state.email,
    state.confirmEmail,
    state.agreed,
    // Reduce `validate` down to a single value if they failed or not
    !Object.values(validate).reduce((prev, curr) => prev || curr, false)
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
                {...toErrProps(validate.password)}
              />
              <TextField
                id="confirmPassword"
                type="password"
                label="Confirm Password"
                className={spacingBottomSmall}
                disabled={loading}
                value={state.confirmPassword}
                onChange={eventUpdate('confirmPassword')}
                {...toErrProps(validate.confirmPassword)}
              />
            </Box>

            <Box flex="1" ml={2}>
              <TextField
                id="email"
                type="email"
                label="Email"
                className={spacingBottomSmall}
                disabled={loading}
                inputRef={emailRef}
                value={state.email}
                onBlur={() => emailRef.current.checkValidity()}
                onChange={eventUpdate('email')}
                {...toErrProps(validate.email)}
              />
              <TextField
                id="confirmEmail"
                type="email"
                label="Confirm Email"
                className={spacingBottomSmall}
                disabled={loading}
                inputRef={emailConfirmRef}
                value={state.confirmEmail}
                onBlur={() => emailConfirmRef.current.checkValidity()}
                onChange={eventUpdate('confirmEmail')}
                {...toErrProps(validate.emailConfirm)}
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
            onClick={doSignup}
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

      <Dialog
        maxWidth="sm"
        aria-labelledby="verify-title"
        open={openDialog}
        disableBackdropClick
        disableEscapeKeyDown
        fullWidth
        onClose={() => history.push('/')}
      >
        <DialogTitle id="verify-title">Email Verification Required</DialogTitle>
        <DialogContent>s</DialogContent>
        <DialogActions>
          <Button
            color="primary"
            variant="contained"
            disableElevation
            onClick={() => history.push('/')}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>

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

export default SignupPage;
