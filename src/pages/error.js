import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import sprite from '../assets/img/menu.png';

const useStyles = makeStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    height: '50vh',
    maxHeight: '50vh',
    width: '100vw',
    zIndex: 0,
    paddingLeft: 32,
    display: 'table-cell',
    verticalAlign: 'middle',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '5%'
    }
  },
  errCode: {
    fontSize: '9.45em'
  },
  content: {
    padding: 16,
    [theme.breakpoints.up('lg')]: {
      paddingTop: '10%',
      paddingLeft: 32,
      display: 'flex'
    },
    zIndex: 1
  },
  contentText: {
    fontSize: '1.15em',
    fontWeight: 100,
    maxWidth: '25%'
  },
  sprite: {
    height: '100vh',
    width: '100%',
    zIndex: 0,
    backgroundImage: `url("${sprite}")`,
    backgroundPosition: 'top',
    backgroundSize: '60%',
    position: 'absolute',
    backgroundRepeat: 'no-repeat',
    bottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block'
    }
  },
  grow: {
    flexGrow: 1
  },
  homeButtonBase: {
    marginTop: 8,
    marginBottom: 8
  },
  homeButton: {
    borderRadius: 32
  }
}));

const ErrorPage = ({ match }) => {
  const { id } = match.params;
  const classes = useStyles();

  const parseErrCode = err => {
    switch (err) {
      case 404:
        return 'Page Not Found';
      case 500:
        return 'Internal Server Error';
      default:
        return 'Oopsie Woopsie Uwu';
    }
  };

  return (
    <div>
      <div className={classes.head}>
        <Typography variant="h1" color="inherit" className={classes.errCode}>
          {match.params.id}
        </Typography>
        <Typography variant="h5">{parseErrCode(parseInt(id))}</Typography>
      </div>
      <div className={classes.sprite} />
      <div className={classes.content}>
        <div className={classes.grow}>
          <Typography variant="h5">We snagged a few wires.</Typography>
          <Typography className={classes.contentText}>
            Our resident doki is on her way to fix this, so don't worry. She got
            your back.
          </Typography>
          <div className={classes.homeButtonBase}>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              to="/"
              className={classes.homeButton}
            >
              Go home
            </Button>
          </div>
        </div>
        <div>
          <Typography />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
