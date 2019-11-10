import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Slide,
  Tab as MuiTab,
  Tabs as MuiTabs,
  TextField,
  Typography
} from '@material-ui/core';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import { Discord, GithubCircle, Gitlab } from 'mdi-material-ui';
import React from 'react';

import { Root } from '../components/common';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { makeColorProps, makeColorStyles, useEventState } from '../utils';

const TabbedPane = ({
  value,
  index,
  children,
  component: Component = 'div',
  ...props
}) => value === index && <Component {...props}>{children}</Component>;

const Tabs = withStyles(theme => ({
  indicator: {
    borderRadius: 8,
    height: '100%',
    background: 'transparent',
    border: [['solid', '2px', theme.palette.primary.main]]
  }
}))(props => <MuiTabs {...props} />);

const Tab = withStyles(theme => ({
  root: {
    marginRight: theme.spacing(1),
    borderRadius: 8,
    background: 'transparent',
    transition: 'background-color 0.2s',
    '&.Mui-selected': {
      color: theme.palette.primary.main,
      fontWeight: 800,
      background: 'rgba(0, 0, 0, 0.05)'
    }
  }
}))(MuiTab);

const useStyles = makeStyles(theme => ({
  picture: {
    height: 256,
    width: 256,
    marginBottom: theme.spacing(4)
  },
  button: {
    width: '100%',
    marginBottom: theme.spacing(2)
  },
  grid: {
    // TODO: stack on top of each other when in mobie
    padding: [[theme.spacing(4), 0]],
    display: 'grid',
    gridGap: theme.spacing(16),
    gridTemplateColumns: '256px 1fr'
  },
  fields: {
    marginBottom: theme.spacing(3)
  },
  saveButton: {
    alignSelf: 'flex-end'
  },
  heading: {
    marginBottom: theme.spacing(2)
  },
  bioField: {
    width: '100%',
    marginBottom: theme.spacing(4)
  },
  connectionButton: {
    ...makeColorStyles('#FFF', theme),
    padding: [[theme.spacing(0.5), theme.spacing(1)]]
  },
  connectionTitle: {
    display: 'flex',
    alignItems: 'center',

    '& > svg': {
      marginRight: theme.spacing(1)
    }
  }
}));

const EditProfilePage = () => {
  const [usingGravatar, setGravatar] = useEventState(false);
  const [tab, _set] = React.useState(0);
  const setTab = (_, value) => _set(value);

  const theme = useTheme();
  const {
    bioField,
    button,
    connectionTitle,
    connectionButton,
    fields,
    grid,
    heading,
    picture,
    saveButton
  } = useStyles();

  return (
    <Root>
      <Navbar />

      <Box py={6} clone>
        <Container>
          <Typography component="h1" variant="h4" className={heading}>
            Settings
          </Typography>

          <Tabs value={tab} onChange={setTab}>
            <Tab label="Account" value={0} />
            <Tab label="Profile" value={1} />
          </Tabs>

          <TabbedPane className={grid} index={0} value={tab}>
            <Box>
              <Avatar
                alt="user icon"
                src="https://images.unsplash.com/photo-1572973785853-64e84f7a1cf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&q=80"
                className={picture}
              />
              <Button
                color="secondary"
                variant="outlined"
                className={button}
                disabled={usingGravatar}
              >
                Update Avatar
              </Button>
              <FormControlLabel
                label="Use Gravatar to automatically update your avatar"
                control={
                  <Checkbox
                    color="secondary"
                    checked={usingGravatar}
                    onChange={setGravatar}
                  />
                }
              />
            </Box>

            <Box display="flex" flexDirection="column">
              <TextField id="username" label="Username" className={fields} />
              <TextField
                id="email"
                label="Email Address"
                type="email"
                className={fields}
              />
              <TextField
                id="password"
                label="New Password"
                type="password"
                className={fields}
              />
              <TextField
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                className={fields}
              />

              <Button
                color="primary"
                variant="contained"
                className={saveButton}
              >
                Save Changes
              </Button>
            </Box>
          </TabbedPane>

          <Box py={4} clone>
            <TabbedPane index={1} value={tab}>
              <TextField
                id="bio"
                label="About Me"
                placeholder="Say something about yourself!"
                variant="outlined"
                className={bioField}
                rows={5}
                multiline
              />

              <Box display="flex" justifyContent="flex-end">
                <Button color="primary" variant="contained">
                  Save
                </Button>
              </Box>

              <Typography component="h2" variant="h5" className={heading}>
                Connections
              </Typography>

              <Grid spacing={4} container>
                <Grid xs={4} item>
                  <Box {...makeColorProps('#7289DA', theme)} p={1} clone>
                    <Card>
                      <CardContent>
                        <Typography
                          component="h3"
                          variant="h5"
                          className={connectionTitle}
                          gutterBottom
                        >
                          <Discord /> Discord
                        </Typography>
                        <Typography>Account not linked</Typography>
                      </CardContent>

                      <CardActions>
                        <Button size="small" className={connectionButton}>
                          Link Account
                        </Button>
                      </CardActions>
                    </Card>
                  </Box>
                </Grid>

                <Grid xs={4} item>
                  <Box {...makeColorProps('#24292E', theme)} p={1} clone>
                    <Card>
                      <CardContent>
                        <Typography
                          component="h3"
                          variant="h5"
                          className={connectionTitle}
                          gutterBottom
                        >
                          <GithubCircle /> GitHub
                        </Typography>
                        <Typography>Account not linked</Typography>
                      </CardContent>

                      <CardActions>
                        <Button size="small" className={connectionButton}>
                          Link Account
                        </Button>
                      </CardActions>
                    </Card>
                  </Box>
                </Grid>

                <Grid xs={4} item>
                  <Box {...makeColorProps('#FC6D26', theme)} p={1} clone>
                    <Card>
                      <CardContent>
                        <Typography
                          component="h3"
                          variant="h5"
                          className={connectionTitle}
                          gutterBottom
                        >
                          <Gitlab /> GitLab
                        </Typography>
                        <Typography>Account not linked</Typography>
                      </CardContent>

                      <CardActions>
                        <Button size="small" className={connectionButton}>
                          Link Account
                        </Button>
                      </CardActions>
                    </Card>
                  </Box>
                </Grid>
              </Grid>
            </TabbedPane>
          </Box>
        </Container>
      </Box>

      <Footer />
    </Root>
  );
};

export default EditProfilePage;
