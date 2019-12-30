import hash from '@emotion/hash';
import { Container } from '@material-ui/core';
import React from 'react';
import { Route } from 'react-router-dom';

import { Root } from '../components/common';
import Carousel, { FrontpageSlide } from '../components/Carousel';
import CatalogBar from '../components/CatalogBar';
import Footer from '../components/Footer';
import LoaderView from '../components/LoaderView';
import Navbar from '../components/Navbar';
import Showcase from '../components/Showcase';
import { getFrontpage } from '../utils/api';
import useGlobalStyles from '../utils/globalStyles';

import EditorsChoicePage from './editorsChoice';
import SearchPage from './search';
import TrendingPage from './trending';

const IndexPage = () => (
  <LoaderView fetcher={getFrontpage}>
    {({ value: [news, recent, loved, trending, { results: wip }] }) => (
      <>
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
      </>
    )}
  </LoaderView>
);

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
        <Route path="/search" component={SearchPage} exact />
      </Container>

      <Footer />
    </Root>
  );
};

export default CatalogPages;
