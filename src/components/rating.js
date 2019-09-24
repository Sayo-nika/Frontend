import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import { makeStyles } from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';
import propTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  positive: {
    fill: yellow[700]
  },
  unfilled: {
    fill: theme.palette.grey[800]
  }
}));

const Rating = ({ rating }) => {
  const classes = useStyles();
  const ratings = [];

  for (let index = 0; index < rating; index++)
    ratings.unshift(<StarIcon className={classes.positive} />);

  for (let index = 0; index < 5 - rating; index++)
    ratings.push(<StarIcon className={classes.unfilled} />);

  console.log(ratings);

  return <div>{ratings.map(item => item)}</div>;
};

Rating.propTypes = {
  rating: propTypes.number.isRequired
};

export default Rating;
