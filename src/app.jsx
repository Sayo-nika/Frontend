import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Navbar from './components/navbar';
import IndexPage from './pages';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import ModPage from './pages/mod';
import SayonikaTheme from './utils/theme';
import ProfilePage from './pages/profile';
// import EditorsChoice from './pages/editors_choice';
// import Trending from './pages/trending';
// import AllModsPage from './pages/all';
// import ErrorPage from './pages/error';

const theme = createMuiTheme(SayonikaTheme);

const App = () => (
  <Router>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Switch>
      <Route path="/" component={IndexPage} exact />
        {/* TOOD: do we wanna have more reviews button change the route? */}
        <Route path="/mods/:id" component={ModPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/signup" component={SignupPage} exact />
        <Route path="/profile/:id" component={ProfilePage} exact />
      {/* <Route path="/index" component={IndexPage} />
      <Route path="/mods" component={ModList} />
      <Route path="/editors_choice" component={EditorsChoice} />
      <Route path="/trending" component={Trending} />
      <Route path="/all" component={AllModsPage} />
      <Route path="/error/:id" component={ErrorPage} /> */}
      </Switch>
    </ThemeProvider>
  </Router>
);

export default App;
