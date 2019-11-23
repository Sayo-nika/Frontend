import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Boundary from './components/Boundary';
import CatalogPages from './pages';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import ModPage from './pages/mod';
import SayonikaTheme from './utils/theme';
import ProfilePage from './pages/profile';
import EditProfilePage from './pages/editProfile';
import NotFoundPage from './pages/404';
import ErrorPage from './pages/error';

const theme = createMuiTheme(SayonikaTheme);

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Boundary fallback={ErrorPage} onError={console.error}>
      <Router>
        <Switch>
          <Route
            path="/(editors_choice|trending|search)?"
            component={CatalogPages}
            exact
          />
          {/* TOOD: do we wanna have more reviews button change the route? */}
          <Route path="/mods/:id" component={ModPage} exact />
          <Route path="/login" component={LoginPage} exact />
          <Route path="/signup" component={SignupPage} exact />
          <Route path="/profile/edit" component={EditProfilePage} exact />
          <Route path="/profile/:id" component={ProfilePage} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </Boundary>
  </ThemeProvider>
);

export default App;
