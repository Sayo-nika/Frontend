import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        backgroundColor: '#333333',
        color: theme.palette.common.white,
        textAlign: 'center'
    }
}));

const Footer = () => {
  const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="caption">
                Copyright 2018-{new Date().getFullYear()} (c) Sayonika Project
                Authors.
            </Typography>
            <Typography paragraph variant="caption">
                Sayonika is a project by Clarity and friends. Doki Doki
                Literature Club, the Logo, and artworks are Copyright Team
                Salvato LLC. Login artwork created by Xhunzei. All Rights
                Reserved.
            </Typography>
        </div>
    );
};

export default Footer;
