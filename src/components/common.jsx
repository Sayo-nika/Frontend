import { Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import React from 'react';
import propTypes from 'prop-types';

import loginBackground from '../assets/img/login-bg.jpg';

export const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  '& > .MuiContainer-root': {
    flex: '1 0 auto'
  }
});

export const LoginBackground = styled('div')({
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  backgroundImage: `url(${loginBackground})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex'
});

export const Card = styled('div')({
  boxShadow:
    '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
  width: '450px',
  borderRadius: '8px',
  padding: '16px',
  height: 'auto',
  margin: 'auto', // ????
  backgroundColor: 'white'
});

export const Link = styled('a')({
  color: '#E84444',
  textDecoration: 'none'
});

export const SubmitButtonBase = styled('button')({
  backgroundColor: '#E84444',
  padding: '8px 12px',
  borderRadius: '4px',
  fontSize: '0.875',
  outline: 'none',
  border: 'none',
  textTransform: 'uppercase',
  color: '#FFF',
  margin: '4px',
  boxShadow:
    '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)'
});

export const SubmitButton = ({ onPress, title }) => (
  <SubmitButtonBase onClick={onPress}>{title}</SubmitButtonBase>
);

SubmitButton.propTypes = {
  onPress: propTypes.func,
  title: propTypes.string
};

export const TextInput = styled('input')({
  borderRadius: '4px',
  padding: '12px 16px 14px',
  border: 'solid 0.25px #666'
});

export const SecretInput = TextInput;
SecretInput.type = 'password';

// ???
export const Flag = styled('input')({});
Flag.type = 'checkbox';

export const RoundIcon = styled('div')({
  width: '128px',
  height: '128px',
  borderRadius: '50%',
  backgroundColor: '#F4F4F4',
  margin: '0 auto',
  textAlign: 'center'
});

export const Spacer = () => <Box flexGrow={1} flexShrink={1} />;

// ???
export const Header = styled('div')({});
export const SubText = styled('div')({});
export const Row = styled('div')({});
