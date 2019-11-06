import {
  Paper,
  Box,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import loginBackground from '../assets/img/login-bg.jpg';
import logo from '../assets/img/logo.svg';
import { Link, Spacer } from '../components/common';
import { useEventState, useMemoFalsey } from '../utils';

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
  }
}));

const LoginPage = () => {
  const [username, setUsername] = useEventState('');
  const [password, setPassword] = useEventState('');
  const [rememberMe, setRemembrance] = useEventState(false);
  const [loading, setLoading] = React.useState(false);
  const disabled = useMemoFalsey(loading, username, password);

  const { background, textField } = useStyles();

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

          <Button
            color="primary"
            size="large"
            variant="contained"
            disabled={disabled}
            onClick={() => setLoading(true)}
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
