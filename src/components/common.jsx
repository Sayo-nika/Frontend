import { Box, Link as MuiLink } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  '& > .MuiContainer-root': {
    flex: '1 0 auto'
  }
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

export const Spacer = () => <Box flexGrow={1} flexShrink={1} />;

const RefLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} {...props} />
));
/* Using react-router link with MUI styling stuffs */
export const Link = props => <MuiLink {...props} component={RefLink} />;
