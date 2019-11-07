import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import Navbar from './components/navbar';
import IndexPage from './pages';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import ModPage from './pages/mod';
import SayonikaTheme from './utils/theme';
import UserPage from './pages/user';
// import EditorsChoice from './pages/editors_choice';
// import Trending from './pages/trending';
// import AllModsPage from './pages/all';
// import ErrorPage from './pages/error';

const theme = createMuiTheme(SayonikaTheme);

const App = () => (
  <Router>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Route path="/" component={IndexPage} exact />
      <Route path="/mods/:id" component={ModPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/users/:id" component={UserPage} />
      {/* <Route path="/index" component={IndexPage} />
      <Route path="/mods" component={ModList} />
      <Route path="/editors_choice" component={EditorsChoice} />
      <Route path="/trending" component={Trending} />
      <Route path="/all" component={AllModsPage} />
      <Route path="/error/:id" component={ErrorPage} /> */}
    </ThemeProvider>
  </Router>
);

export default App;
