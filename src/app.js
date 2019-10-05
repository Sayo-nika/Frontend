import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Navbar from './components/navbar';
import LoginPage from './pages/login';
import DemoPage from './pages/zenno';
import IndexPage from './pages';
import ModList from './pages/mod_list';
import ModPage from './pages/mod';
import Sayonitheme from './utils/theme';
import EditorsChoice from './pages/editors_choice';
import Trending from './pages/trending';
import AllModsPage from './pages/all';
import UserPage from './pages/user';
import ErrorPage from './pages/error';

const SayonikaTheme = createMuiTheme(Sayonitheme);

const App = () => (
  <Router>
    <ThemeProvider theme={SayonikaTheme}>
      <Route path="/" component={IndexPage} exact />
      <Route path="/index" component={IndexPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/mods" component={ModList} />
      <Route path="/editors_choice" component={EditorsChoice} />
      <Route path="/trending" component={Trending} />
      <Route path="/all" component={AllModsPage} />
      <Route path="/mod/:id" component={ModPage} />
      <Route path="/user/:id" component={UserPage} />
      <Route path="/error/:id" component={ErrorPage} />
      {process.env.NODE_ENV == 'development' ? (
        <Route path="/zenno" component={DemoPage} />
      ) : null}
    </ThemeProvider>
  </Router>
);

export default App;
