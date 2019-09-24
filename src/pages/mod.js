import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  CircularProgress,
  Avatar,
  Typography,
  Toolbar,
  Button,
  Fab,
  Grid
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import ReportIcon from '@material-ui/icons/Report';

import { fromModColor } from '../utils/colors';
import Review from '../components/review';
import Navbar from '../components/navbar';
import ShareLink from '../components/share_link';
import Footer from '../components/footer';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  loader: {
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  toolbar: {
    alignItems: 'center',
    paddingBottom: theme.spacing(1)
  },
  icon: {
    backgroundColor: color => fromModColor(color, 'main', theme),
    height: 64,
    width: 64,
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  favoriteFab: {
    marginRight: theme.spacing(1)
  },
  downloadButton: {
    marginRight: theme.spacing(1)
  },
  reportButton: {
    color: theme.status.danger,
    borderColor: theme.status.danger
  },
  bannerRoot: {
    minHeight: 450,
    backgroundColor: color => fromModColor(color, 'dark', theme)
  },
  descriptions: {
    padding: theme.spacing(2)
  },
  authorDiv: {
    display: 'flex',
    alignItems: 'center'
  },
  authorAvatar: {
    height: 48,
    width: 48,
    backgroundColor: color => fromModColor(color, 'dark', theme),
    marginRight: theme.spacing(1)
  }
}));

const ModPage = ({ match }) => {
  const { id } = match.params;
  const [state, setState] = useState({
    viewLoaded: false,
    viewErrored: false,
    mod: {
      title: 'Mod Title',
      generzlizedTitle: "Obama's Sexy Time Club",
      icon: '',
      banner: '',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus turpis ac neque ullamcorper, quis ullamcorper ipsum tincidunt. Duis fermentum ornare viverra. Sed nec arcu vel libero molestie maximus. Cras a sodales leo. Nulla blandit orci hendrerit congue dignissim. Ut ultrices ac turpis sed suscipit. Curabitur lacinia mauris dolor, vel maximus nulla tincidunt at. Aenean id magna neque. Vestibulum dictum fringilla erat, id tincidunt magna volutpat nec. Donec vel nisl ex. Donec vel tempus turpis. Nulla facilisi. Morbi porttitor pharetra malesuada. Phasellus aliquet, augue sit amet mollis varius, mauris risus ultricies augue, id fermentum ante est eget nibh. Integer vitae eros vel velit volutpat euismod. Fusce lobortis mauris sit amet finibus aliquet. In tincidunt ante in justo imperdiet, eget sollicitudin ipsum vehicula. Integer non euismod libero. Nullam non venenatis nunc, eget sodales lectus. Sed vel mattis nisi. Nulla venenatis elit metus, eget eleifend eros tincidunt a. Vivamus lobortis metus massa, eu tempor sapien euismod ut. Proin et scelerisque dolor. Quisque nec leo ipsum. Phasellus facilisis risus eu fringilla viverra. Ut sollicitudin sodales neque, vel rhoncus felis auctor vel. Aliquam maximus arcu nisl, quis euismod nibh varius quis. Duis posuere justo eu ligula luctus tempus. Vestibulum imperdiet mi a neque pulvinar ultrices. Fusce tincidunt et arcu ut venenatis. Nam et tortor a nibh vestibulum iaculis. Ut in egestas urna. Morbi non mollis justo.',
      website: '',
      isPrivateBeta: false,
      category: 0,
      nsfw: false,
      themeColor: 0,
      releasedAt: '',
      lastUpdated: '',
      status: 0,
      downloads: 0,
      downloadUrl: '',
      verified: false,
      author: 'Obama Caligra'
    }
  });
  const classes = useStyles(state.mod.themeColor);

  const getModData = id => {
    // TODO: Add fetch logic for the mod
    // Remember that if the view did load, viewLoaded must
    // be true and viewErrored must be false.
  };

  const getDevelopers = classes => (
    // get mod author .map(author => {
    <div className={classes.authorDiv}>
      <Avatar className={classes.authorAvatar} src="" />
      <Typography>Sayonika Developer</Typography>
    </div>
  );
  // })
  const getReviews = classes => (
    // get reviews .map(review => {
    <Review
      id="1"
      title="Hello"
      content="My disappointment is immesurable and my day is ruined."
      author_id="33"
      rating={3}
    />
  );
  // })
  const toggleFavorite = () => {};
  return (
    <div>
      <Navbar />
      <div className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <Avatar src={state.mod.icon} className={classes.icon} />
          <Typography variant="h5" className={classes.title}>
            {state.mod.generzlizedTitle}
          </Typography>
          <Typography>{state.mod.author}</Typography>
          <Toolbar>
            <Fab
              size="small"
              className={classes.favoriteFab}
              onClick={toggleFavorite}
            >
              <FavoriteIcon />
            </Fab>
            <Typography>1.5k</Typography>
          </Toolbar>
          <Button
            variant="outlined"
            className={classes.downloadButton}
            color="primary"
          >
            Download
          </Button>
          <Button variant="outlined" className={classes.reportButton}>
            <ReportIcon />
          </Button>
        </Toolbar>
        <div className={classes.bannerRoot} />
        <Grid spacing={4} className={classes.descriptions} container>
          <Grid xs={12} lg={8} item>
            <Typography>{state.mod.description}</Typography>
          </Grid>
          <Grid xs={12} lg={4} item>
            <div>
              <Typography variant="h6">Developers:</Typography>
              {getDevelopers(classes)}
              <br />
              <Typography variant="h6">Share</Typography>
              <ShareLink
                title="Copy link"
                link="https://thumbs.gfycat.com/QuaintTenderAmericanindianhorse-small.gif"
              />
              <ShareLink
                title="Facebook"
                link="https://thumbs.gfycat.com/QuaintTenderAmericanindianhorse-small.gif"
              />
              <ShareLink
                title="Twitter"
                link="https://thumbs.gfycat.com/QuaintTenderAmericanindianhorse-small.gif"
              />
            </div>
          </Grid>
          <Grid xs={12} lg={8} item>
            <div>
              <Typography variant="h6">Reviews</Typography>
              {getReviews(classes)}
            </div>
          </Grid>
        </Grid>
        {!state.viewLoaded ? (
          <div className={classes.loader}>
            <CircularProgress size={56} />
          </div>
        ) : null}
        <Footer />
      </div>
    </div>
  );
};

export default ModPage;
