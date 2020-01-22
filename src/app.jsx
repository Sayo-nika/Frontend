import DateFnsUtils from '@date-io/date-fns';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider as PickerUtilsProvider } from '@material-ui/pickers';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useAsync } from 'react-use';

import Boundary from './components/Boundary';
import CatalogPages from './pages';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import ModPage from './pages/mod';
import AddModPage from './pages/addMod';
import SayonikaTheme from './utils/theme';
import ProfilePage from './pages/profile';
import EditProfilePage from './pages/editProfile';
import NotFoundPage from './pages/404';
import ErrorPage from './pages/error';
import { getUser } from './utils/api';
import UserContext from './utils/context';

const theme = createMuiTheme(SayonikaTheme);

const App = () => {
  const [user, setUser] = React.useState(null);

  useAsync(async () => {
    if (localStorage.getItem('token')) {
      const user = await getUser('@me');
      setUser(user);
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{ user, setUser }}>
        <CssBaseline />
        <Boundary fallback={ErrorPage} onError={console.error}>
          <PickerUtilsProvider utils={DateFnsUtils}>
            <Router>
              <Switch>
                <Route
                  path="/(editors_choice|trending|search)?"
                  component={CatalogPages}
                  exact
                />
                {/* TOOD: do we wanna have more reviews button change the route? */}
                <Route path="/mods/add" component={AddModPage} exact />
                <Route path="/mods/:id/(reviews)?" component={ModPage} exact />
                <Route path="/login" component={LoginPage} exact />
                <Route path="/signup" component={SignupPage} exact />
                <Route
                  path="/profile/@me/edit"
                  component={EditProfilePage}
                  exact
                />
                <Route path="/profile/:id" component={ProfilePage} exact />
                <Route component={NotFoundPage} />
              </Switch>
            </Router>
          </PickerUtilsProvider>
        </Boundary>
      </UserContext.Provider>
    </ThemeProvider>
  );
};

export default App;
