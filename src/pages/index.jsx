import hash from '@emotion/hash';
import {
  Box,
  Button,
  Chip,
  CssBaseline,
  Container,
  Fab,
  Grid,
  Typography
} from '@material-ui/core';
import { orange, purple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { ChevronLeft, ChevronRight } from 'mdi-material-ui';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Slider from 'react-styled-carousel';

import CatalogBar from '../components/CatalogBar';
import { Root, Spacer } from '../components/common';
import Footer from '../components/Footer';
import ModCard from '../components/ModCard';
import Navbar from '../components/Navbar';
import { useGlobalPageStyles } from '../utils/global_styles';
import { getFrontpage } from '../utils/api';

const m = (...args) => args.join(' ');

const useShowcaseStyles = makeStyles(theme => ({
  section: {
    paddingBottom: theme.spacing(4)
  },
  sectionHeading: {
    paddingBottom: theme.spacing(3)
  }
}));

const Showcase = ({ mods, title }) => {
  const { section, sectionHeading } = useShowcaseStyles();

  return (
    <section className={section}>
      <Typography variant="h4" component="h2" className={sectionHeading}>
        {title}
      </Typography>

      <Grid spacing={2} container>
        {mods && mods.length ? (
          mods.map(mod => (
            <Grid key={mod.id} xs={12} md={6} lg={3} item>
              <ModCard {...mod} />
            </Grid>
          ))
        ) : (
          <Typography>Just us and these clowns.</Typography>
        )}
      </Grid>
    </section>
  );
};

const useSlideStyles = makeStyles(theme => ({
  root: {
    backgroundImage: ({ banner }) => `url(${banner})`,
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
  coloring: {
    color: ({ type }) =>
      theme.palette.getContrastText(
        type === 0
          ? orange[500]
          : type === 2
          ? purple[500]
          : theme.palette.secondary.main
      ),
    backgroundColor: ({ type }) =>
      type === 0
        ? orange[500]
        : type === 2
        ? purple[500]
        : theme.palette.secondary.dark,
    '&:hover': {
      backgroundColor: ({ type }) =>
        type === 0
          ? orange[700]
          : type === 2
          ? purple[700]
          : theme.palette.secondary.dark
    }
  },
  headline: {
    paddingBottom: theme.spacing(1)
  }
}));

const SlideLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} {...props} />
));

const Slide = ({ type, title, body, url, banner }) => {
  const { button, coloring, root, headline } = useSlideStyles({
    banner,
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
          {...(type === 0 ? { component: SlideLink, to: url } : { href: url })}
        >
          View
        </Button>
      </Box>
    </Box>
  );
};

const data = x => ({
  id: x.toString(),
  title: 'Dolor Sit Amet',
  icon: 'https://images.unsplash.com/photo-1572226372001-f4880374b677',
  banner: 'https://images.unsplash.com/photo-1536890992765-f42a1ee1e2a8',
  tagline: 'Lorem ipsum amsicit de alit. What will they do now?',
  status: 'planning',
  category: 'comedy',
  theme_color: 'deep_purple' // eslint-disable-line camelcase
});

const gimmeNews = x => ({
  type: x,
  title: 'Lorem Ipsum Dolor Sit Amet',
  body:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a sem mauris. Proin ornare eget lectus non aliquet. Fusce ut consequat lorem. Proin vulputate consequat ante, eu vestibulum purus accumsan in.',
  url: 'https://google.com',
  banner: 'https://images.unsplash.com/photo-1572299273506-a476ced8cb2a'
});

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

const IndexPage = () => {
  const [{ news, recent, loved, trending, wip }, setState] = React.useState({
    news: Array.from([0, 1, 2], gimmeNews),
    recent: Array.from([1, 2, 3, 4], data),
    loved: Array.from([1, 2, 3, 4], data),
    trending: Array.from([1, 2, 3, 4], data),
    wip: Array.from([1, 2, 3, 4], data)
  });

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     const [news, recent, loved, trending, wip] = await getFrontpage();
  //     setState({ news, recent, loved, trending, wip });
  //   };

  //   fetchData();
  // });

  const { pageContent } = useGlobalPageStyles();
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
    <Root>
      <Navbar />
      <CssBaseline />

      <Container className={pageContent}>
        <CatalogBar />

        <Slider
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
          autoSlide={false}
          cardsToShow={1}
          className={carousel}
          showDots={false}
        >
          {news.map(article => (
            <Slide key={hash(article.url + article.title)} {...article} />
          ))}
        </Slider>

        <Showcase title="Fresh from the Oven" mods={recent} />
        <Showcase title="Most Loved" mods={loved} />
        <Showcase title="Trending" mods={trending} />
        <Showcase title="Coming Soon" mods={wip} />
      </Container>

      <Footer />
    </Root>
  );
};

export default IndexPage;
