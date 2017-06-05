/**
 * Created by kelly on 04/06/17.
 */

import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/layouts/main-layout';
import SearchLayoutContainer from './components/containers/search-layout-container';

// Pages
import Home from './components/home';

import UserListContainer from './components/containers/user-list-container';
import UserProfileContainer from './components/containers/user-profile-container';

import LoginContainer from './components/containers/login-container';
import MoviesContainer from './components/containers/movies-container';
import MovieContainer from './components/containers/movie-container';
import SchedulesContainer from './components/containers/schedules-container';
import ScheduleContainer from './components/containers/schedule-container';
//import ScheduleCreationContainer from './components/containers/schedule-creation-container';

import AboutContainer from './components/containers/about-container';

// -- Admin

import MovieCreationContainer from './components/containers/movie-creation-container';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>

      <Route path="/" component={Home} />

      <Route path="/movies">
        <Route path="/creation" component={MovieCreationContainer} />
      </Route>

    </Route>
  </Router>
);
