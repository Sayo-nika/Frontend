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
import { red } from '@material-ui/core/colors';
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

import Carousel, { ImgSlide } from '../../components/Carousel';
import { RefLink, Root, Spacer } from '../../components/common';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import useGlobalStyles from '../../utils/globalStyles';
import { categories } from '../../utils/maps';

import Review from './Review';
import Shareable from './Shareable';
import Developer from './Developer';

export const useStyles = makeStyles(theme => ({
  carousel: {
    marginBottom: theme.spacing(2)
  },
  header: {
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
  moreReviews: {
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
  }
}) => {
  const [
    {
      title,
      icon,
      description,
      website,
      category,
      released_at: releasedAt,
      last_updated: lastUpdated,
      nsfw
    },
    setState
    /* eslint-disable camelcase */
  ] = React.useState({
    title: 'Mod Title',
    icon:
      'https://images.unsplash.com/photo-1513682229978-58fc4680c142?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    description: [
      <Typography key="1" variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec nulla
        sagittis, porttitor felis a, mollis lacus. Quisque tempus felis metus,
        eget malesuada ex consectetur eget. Praesent molestie neque sed lacus
        porta dignissim. Integer bibendum quam sit amet sapien aliquam,
        ullamcorper placerat sem dictum. Quisque ullamcorper, nulla molestie
        congue bibendum, massa tellus euismod nulla, sed sagittis risus purus et
        justo. Phasellus ipsum enim, convallis dignissim nibh non, blandit
        dapibus massa. Nunc erat justo, porta et erat ut, sollicitudin volutpat
        tortor. Nam hendrerit diam magna, a tristique urna gravida eget. Proin
        rhoncus mattis feugiat. Nam sollicitudin, risus sed bibendum aliquam,
        dolor enim molestie velit, eu dignissim mi lorem vitae nulla. Maecenas
        id sodales lectus, et posuere lectus. Praesent lorem magna, porta eu
        arcu et, porta aliquet urna. Praesent imperdiet elementum quam, a
        placerat augue iaculis aliquam. Aliquam ut turpis non erat blandit
        interdum. In faucibus ligula ac purus feugiat, at iaculis dui posuere.
        Ut eleifend sit amet libero id dignissim.
      </Typography>,
      <Typography key="2" variant="body1" paragraph>
        Morbi vitae nulla dui. Nullam fermentum eu quam ac varius. Suspendisse
        euismod diam non mauris placerat venenatis. Nullam sit amet facilisis
        eros, a consequat leo. Sed metus justo, tincidunt eget ligula in,
        laoreet tempor mi. Morbi quis maximus tortor. Nam eleifend pellentesque
        tincidunt. Nullam at enim id lorem efficitur placerat in euismod leo.
        Mauris fermentum et tortor vel laoreet. Nam vitae risus vel arcu
        vestibulum euismod. Vivamus bibendum, mauris sagittis porttitor rhoncus,
        sapien elit consequat odio, eget pharetra est quam ac libero. Etiam eu
        dignissim justo. Aenean vitae dolor ac massa aliquet commodo ac et
        ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vestibulum faucibus ornare nibh dictum luctus. Cras dapibus lacus odio,
        nec finibus mauris mollis at. Duis vel semper nisl. Vestibulum non felis
        dapibus, maximus sem sed, volutpat mi. Sed at nunc malesuada, posuere
        sem et, mattis dui. Proin euismod sit amet sem sit amet rhoncus.
      </Typography>,
      <Typography key="3" variant="body1" paragraph>
        Sed molestie nibh ac lectus vestibulum luctus ut maximus massa. Nunc
        enim tellus, semper ultrices quam eu, aliquet euismod elit. Nam id ex
        mi. Pellentesque id turpis a leo blandit ornare. Suspendisse ex nunc,
        fermentum vel magna ut, euismod suscipit neque. Vivamus eu arcu id eros
        luctus imperdiet at eget lorem. Duis scelerisque lectus interdum auctor
        blandit. In nec congue neque, ac tincidunt massa. Fusce convallis lorem
        ultrices, sodales felis non, dictum ipsum. Nullam sit amet diam ut diam
        ornare semper. Duis viverra orci ante, placerat dictum nisl consectetur
        sit amet. Nunc a nisi quis dui lobortis pretium id vitae augue. Fusce
        tortor quam, accumsan eu facilisis ut, ultricies sit amet tellus. Donec
        tellus dui, vulputate sit amet congue a, lobortis ut nisi. Proin nec
        risus sit amet libero eleifend venenatis.
      </Typography>
    ],
    website: 'https://google.com',
    category: 'comedy',
    released_at: Date.now(),
    last_updated: Date.now(),
    nsfw: true
  });
  /* eslint-enable camelcase */

  const { pageContent } = useGlobalStyles();
  const {
    carousel,
    chipGrid,
    header,
    headerIcon,
    moreReviews,
    spacing
  } = useStyles();

  return (
    <Root>
      <Navbar />

      <Container className={pageContent}>
        <Box
          component="header"
          display="flex"
          alignItems="center"
          className={header}
        >
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
          <ImgSlide
            src="https://images.unsplash.com/photo-1572380034678-c4d9b1039751"
            height={600}
          />
          <ImgSlide
            src="https://images.unsplash.com/photo-1572380034678-c4d9b1039751"
            height={600}
          />
        </Carousel>

        <Grid spacing={3} container>
          <Grid xs={8} item>
            <Box mb={4}>
              {/* TODO: md parsing */}
              {description}
            </Box>

            <Box>
              <Review authorID={1} />
              <Review authorID={2} />
              <Review authorID={3} />
              {/* TODO */}
              <Button color="primary" className={moreReviews}>
                See More Reviews
              </Button>
            </Box>
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
                  // className={cursor}
                  component={RefLink}
                  icon={<EmoticonOutline />}
                  label={categories[category] || 'Unknown Category'}
                  to={`/search?category=${category}`}
                  clickable
                />
                <Chip
                  component="a"
                  label="Website"
                  rel="noopener"
                  target="_blank"
                  // className={cursor}
                  href={website}
                  icon={<Web />}
                  clickable
                />
                {nsfw && (
                  <Chip label="NSFW" icon={<AlertCircle />} color="primary" />
                )}
              </Box>
            </Box>

            <Typography variant="h5" component="h2" paragraph>
              <u>Authors</u>
            </Typography>

            <Box display="flex" flexDirection="column" mb={2}>
              <Developer id={1} />
              <Developer id={2} />
              <Developer id={3} />
            </Box>

            <Typography variant="h5" component="h2" paragraph>
              <u>Share</u>
            </Typography>

            <Box display="flex" flexDirection="column" mb={2}>
              {/* TODO: navigator.share button on mobile */}
              {/* <Shareable type="share" title="Lorem Ipsum"/> */}
              <Shareable type="copy" title="Lorem Ipsum" />
              <Shareable type="facebook" title="Lorem Ipsum" />
              <Shareable type="twitter" title="Lorem Ipsum" />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Root>
  );
};

export default ModPage;
