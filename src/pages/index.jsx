import hash from '@emotion/hash';
import { CssBaseline, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import Carousel, { FrontpageSlide } from '../components/Carousel';
import CatalogBar from '../components/CatalogBar';
import { Root } from '../components/common';
import Footer from '../components/Footer';
import ModCard from '../components/ModCard';
import Navbar from '../components/Navbar';
import useGlobalStyles from '../utils/globalStyles';
import { getFrontpage } from '../utils/api';

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

  const { pageContent } = useGlobalStyles();

  return (
    <Root>
      <Navbar />
      <CssBaseline />

      <Container className={pageContent}>
        <CatalogBar />

        <Carousel>
          {news.map(article => (
            <FrontpageSlide
              key={hash(article.url + article.title)}
              {...article}
            />
          ))}
        </Carousel>

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
