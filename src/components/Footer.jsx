import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: [[theme.spacing(4), theme.spacing(2)]],
    marginTop: theme.spacing(6),
    backgroundColor: '#333333',
    color: theme.palette.common.white,
    textAlign: 'center'
  },
  container: {
    maxWidth: 750
  }
}));

const Footer = () => {
  const { container, root } = useStyles();

  return (
    <div className={root}>
      <div className={container}>
        <Typography variant="body1" paragraph>
          Copyright 2019 (c) Sayonika Project Authors.
        </Typography>
        <Typography variant="body1">
          Sayonika is a project by Clarity and friends. Doki Doki Literature
          Club, the Logo, and artworks are Copyright Team Salvato LLC. Login
          artwork created by Xhunzei. All Rights Reserved.
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
