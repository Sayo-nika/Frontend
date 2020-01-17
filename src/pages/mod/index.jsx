import {
  Chip,
  Container,
  Box,
  Avatar,
  Typography,
  IconButton,
  Button,
  Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { format } from 'date-fns/fp';
import {
  AlertOctagon,
  AlertCircle,
  Download,
  EmoticonOutline,
  Heart,
  Web
} from 'mdi-material-ui';
import React from 'react';
import { Route } from 'react-router-dom';

import Carousel, { ImgSlide } from '../../components/Carousel';
import { RefLink, Root, Spacer } from '../../components/common';
import Footer from '../../components/Footer';
import LoaderView from '../../components/LoaderView';
import Markdown from '../../components/Markdown';
import Navbar from '../../components/Navbar';
import { getMod, getModReviews } from '../../utils/api';
import config from '../../utils/config';
import useGlobalStyles from '../../utils/globalStyles';
import { categories } from '../../utils/maps';

import Developer from './Developer';
import Review from './Review';
import ReviewsModal from './ReviewsModal';
import { ShareList } from './Shareable';

export const useStyles = makeStyles(theme => ({
  carousel: {
    marginBottom: theme.spacing(2)
  },
  headerIcon: {
    width: 64,
    height: 64,
    marginRight: theme.spacing(2)
  },
  spacing: {
    marginLeft: theme.spacing(1)
  },
  fullWidth: {
    width: '100%'
  },
  chipGrid: {
    '& > *': {
      marginRight: theme.spacing(1)
    }
  }
}));

const modDateFormat = format('LLLL do, yyyy');

const ModPage = ({
  match: {
    params: { id }
  },
  history
}) => {
  const { pageContent } = useGlobalStyles();
  const { carousel, chipGrid, headerIcon, fullWidth, spacing } = useStyles();

  return (
    <Root>
      <Navbar />

      <Container className={pageContent}>
        <LoaderView fetcher={() => getMod(id)} errorView={ErrorView}>
          {({
            value: {
              title,
              icon,
              description,
              website,
              category,
              released_at: releasedAt,
              last_updated: lastUpdated,
              nsfw,
              media,
              authors
            }
          }) => (
            <>
              {/* add banner thing here depending on mod status */}

              <Box component="header" display="flex" alignItems="center" mb={2}>
                <Avatar alt="mod icon" src={icon} className={headerIcon} />

                <div>
                  <Typography component="h1" variant="h4">
                    {title}
                  </Typography>

                  <Box color="text.secondary" clone>
                    <Typography component="p" variant="subtitle2">
                      Released {modDateFormat(releasedAt)}
                    </Typography>
                  </Box>
                </div>

                <Spacer />

                <Box display="flex" alignItems="center">
                  4.5k
                  <IconButton className={spacing}>
                    <Heart />
                  </IconButton>
                </Box>

                <Button
                  color="primary"
                  variant="outlined"
                  className={spacing}
                  startIcon={<Download />}
                >
                  Download
                </Button>
                <IconButton className={spacing}>
                  <AlertOctagon />
                </IconButton>
              </Box>

              <Carousel className={carousel}>
                {media.map(({ hash }) => (
                  <ImgSlide
                    key={hash}
                    src={`${config.IPFS_GATEWAY}${hash}`}
                    height={600}
                  />
                ))}
              </Carousel>

              <Grid spacing={3} container>
                <Grid xs={8} item>
                  <Box mb={4}>
                    <Markdown text={description} />
                  </Box>

                  <LoaderView
                    height="auto"
                    fetcher={() => getModReviews(id, { limit: 3 })}
                  >
                    {({ value: { results: reviews } }) => (
                      <Box>
                        {reviews.map(r => (
                          <Review key={r.id} {...r} />
                        ))}

                        <Button
                          color="primary"
                          className={fullWidth}
                          onClick={() => history.push(`/mods/${id}/reviews`)}
                        >
                          See More Reviews
                        </Button>

                        <Route
                          path={`/mods/${id}/reviews`}
                          render={renderProps => (
                            <ReviewsModal id={id} {...renderProps} />
                          )}
                          exact
                        />
                      </Box>
                    )}
                  </LoaderView>
                </Grid>

                <Grid xs={4} item>
                  <Box mb={2}>
                    <Box color="text.secondary" clone>
                      <Typography component="p" variant="subtitle2">
                        Last updated {modDateFormat(lastUpdated)}
                      </Typography>
                    </Box>

                    <Box
                      alignItems="center"
                      display="flex"
                      className={chipGrid}
                      mt={1}
                    >
                      <Chip
                        title="Find similar mods"
                        component={RefLink}
                        icon={<EmoticonOutline />}
                        label={categories[category] || 'Unknown Category'}
                        to={`/search?category=${category}`}
                        clickable
                      />
                      {website && (
                        <Chip
                          component="a"
                          label="Website"
                          rel="noopener"
                          target="_blank"
                          href={website}
                          icon={<Web />}
                          clickable
                        />
                      )}
                      {nsfw && (
                        <Chip
                          label="NSFW"
                          icon={<AlertCircle />}
                          color="primary"
                        />
                      )}
                    </Box>
                  </Box>

                  <Typography variant="h5" component="h2" paragraph>
                    <u>Authors</u>
                  </Typography>

                  <Box display="flex" flexDirection="column" mb={2}>
                    {authors.map(author => (
                      <Developer key={author.id} {...author} />
                    ))}
                  </Box>

                  <Typography variant="h5" component="h2" paragraph>
                    <u>Share</u>
                  </Typography>

                  <Box display="flex" flexDirection="column" mb={2}>
                    <ShareList title={title} />
                  </Box>
                </Grid>
              </Grid>
            </>
          )}
        </LoaderView>
      </Container>
      <Footer />
    </Root>
  );
};

const ErrorView = ({ ...state }) => {
  console.log(state);

  return (
    <Box
      alignItems="center"
      display="flex"
      height="100%"
      justifyContent="center"
      width="100%"
    >
      <Typography component="h1" variant="h3">
        Unknown mod
      </Typography>
    </Box>
  );
};

export default ModPage;
