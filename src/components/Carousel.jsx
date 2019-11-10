import { Box, Button, Chip, Fab, Typography } from '@material-ui/core';
import { orange, purple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { ChevronLeft, ChevronRight } from 'mdi-material-ui';
import React from 'react';
import Slider from 'react-styled-carousel';

import { Link, Spacer } from '../components/common';
import { m, makeColorStyles } from '../utils';

const useSlideStyles = makeStyles(theme => ({
  root: {
    backgroundImage: ({ src }) => `url(${src})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    boxShadow: [
      ['inset', '0', '-250px', '80px', '-125px', 'rgba(0, 0, 0, 0.5)']
    ],
    color: '#FFF',
    display: 'flex',
    flexDirection: 'column'
  },
  button: {
    borderRadius: 64
  },
  coloring: ({ type }) =>
    makeColorStyles(
      type === 0
        ? orange[500]
        : type === 1
        ? theme.palette.secondary.main
        : purple[500],
      theme
    ),
  headline: {
    paddingBottom: theme.spacing(1)
  }
}));

export const ImgSlide = ({ src, height = 500 }) => {
  const { root } = useSlideStyles({ src });

  return <Box className={root} height={height} />;
};

export const FrontpageSlide = ({ type, title, body, url, banner }) => {
  const { button, coloring, root, headline } = useSlideStyles({
    src: banner,
    type
  });

  return (
    <Box borderRadius={16} className={root} height={500} p={5}>
      <div>
        <Chip
          label={
            type === 0
              ? 'Recently Released'
              : type === 1
              ? 'Featured'
              : 'From the Blog'
          }
          className={coloring}
        />
      </div>

      <Spacer />

      <Box alignItems="center" display="flex" px={2}>
        <Box width="75%">
          <Typography variant="h4" component="h1" className={headline}>
            {title}
          </Typography>
          <Typography variant="body1">{body}</Typography>
        </Box>

        <Spacer />

        <Button
          className={m(button, coloring)}
          size="large"
          variant="contained"
          {...(type === 0 ? { component: Link, to: url } : { href: url })}
        >
          View
        </Button>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles(theme => ({
  carousel: {
    padding: 0,
    marginBottom: theme.spacing(8)
  },
  arrow: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    zIndex: 900
  }
}));

const Carousel = ({ children, className }) => {
  const { arrow, carousel } = useStyles();

  const LeftArrow = (
    <Fab aria-label="previous" className={arrow}>
      <ChevronLeft color="primary" fontSize="large" />
    </Fab>
  );
  const RightArrow = (
    <Fab aria-label="next" className={arrow}>
      <ChevronRight color="primary" fontSize="large" />
    </Fab>
  );

  return (
    <Slider
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      // autoSlide={false}
      cardsToShow={1}
      className={m(carousel, className)}
      showDots={false}
    >
      {children}
    </Slider>
  );
};

export default Carousel;
