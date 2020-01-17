import { Box, Avatar, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const useDeveloperStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    marginBottom: theme.spacing(2),
    borderRadius: 64,
    '&:hover': {
      boxShadow: theme.shadows[6]
    }
  },
  icon: {
    width: 72,
    height: 72,
    marginRight: theme.spacing(2)
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
    '&::before': {
      content: '""',
      position: 'absolute',
      zIndex: 0,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%'
    }
  }
}));

const Developer = ({ id, username, avatar }) => {
  const { icon, link, root } = useDeveloperStyles();
  return (
    <Paper className={root} elevation={0}>
      <Box display="flex" alignItems="center">
        <Avatar src={avatar} alt={username} className={icon} />
        <Typography variant="h6" component="h3">
          <Link to={`/profile/${id}`} className={link}>
            {username}
          </Link>
        </Typography>
      </Box>
    </Paper>
  );
};

export default Developer;
