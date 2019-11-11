import hash from '@emotion/hash';
import { Container } from '@material-ui/core';
import React from 'react';
import { Route } from 'react-router-dom';

import { Root } from '../components/common';
import Carousel, { FrontpageSlide } from '../components/Carousel';
import CatalogBar from '../components/CatalogBar';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import { getFrontpage } from '../utils/api';
import useGlobalStyles from '../utils/globalStyles';

import EditorsChoicePage from './editorsChoice';
import TrendingPage from './trending';

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

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

const CatalogPages = () => {
  const { pageContent } = useGlobalStyles();

  return (
    <Root>
      <Navbar />
      <Container className={pageContent}>
        <CatalogBar />

        <Route path="/" component={IndexPage} exact />
        <Route path="/editors_choice" component={EditorsChoicePage} exact />
        <Route path="/trending" component={TrendingPage} exact />
      </Container>

      <Footer />
    </Root>
  );
};

export default CatalogPages;
