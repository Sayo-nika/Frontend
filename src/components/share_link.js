import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import propTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  icon: {
    marginRight: theme.spacing(1)
  },
  link: {
    color: theme.palette.common.black
  }
}));

const ShareLink = ({ title, link, onClick }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <LinkIcon className={classes.icon} />
      {link && link != '' ? (
        <a href={link} rel="nofollower noopener noreferrer">
          <Typography className={classes.link}>{title}</Typography>
        </a>
      ) : (
        <Typography onClick={onClick}>{title}</Typography>
      )}
    </div>
  );
};

ShareLink.propTypes = {
  link: propTypes.string,
  onClick: propTypes.func,
  title: propTypes.string.isRequired
};

export default ShareLink;
