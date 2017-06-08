/**
 * Created by kelly on 07/06/17.
 */

import React from 'react';
import { HashRouter as Router, Route, IndexRoute, Switch } from 'react-router-dom';

// Layouts
import MainLayout from './components/layouts/main-layout';
import SearchLayoutContainer from './components/containers/search-layout-container';

// Pages
import Home from './components/home';

import UserListContainer from './components/containers/user-list-container';
import UserProfileContainer from './components/containers/user-profile-container';

import MovieListContainer from './components/containers/movie-list-container';
import LoginContainer from './components/containers/login-container';
//import MoviesContainer from './components/containers/movies-container';
//import SchedulesContainer from './components/containers/schedules-container';
//import ScheduleContainer from './components/containers/schedule-container';
//import AboutContainer from './components/containers/about-container';

import ReservationCreationContainer from './components/containers/reservation-creation-container';
import MyReservationsContainer from './components/containers/my-reservations-container';

// -- Admin

import MovieCreationContainer from './components/containers/movie-creation-container';
import MovieEditionContainer from './components/containers/movie-edition-container';
import AdminMoviesContainer from './components/containers/admin-movies-container';
import ScheduleCreationContainer from './components/containers/schedule-creation-container';
import ReservationsContainer from './components/containers/reservations-container';


console.log('router.js');

class App extends React.Component {

  render() {
    return (
      <Router history={history}>
        <div>
            <Route path="/" component={Home} />

            <Route exact path="/movies" component={MovieListContainer}/>
            <Route exact path="/movies/creation" component={MovieCreationContainer}/>
            <Route exact path="/movies/edition/:movieId" component={MovieEditionContainer}/>
            <Route exact path="/movies/admin" component={AdminMoviesContainer}/>

            <Route exact path="/schedules/creation" component={ScheduleCreationContainer}/>
            <Route exact path="/schedules/:scheduleId"/>

            <Route exact path="/reservation" component={ReservationCreationContainer}/>
            <Route exact path="/myreservations" component={MyReservationsContainer}/>
            <Route exact path="/reservations" component={ReservationsContainer}/>
        </div>
      </Router>
    )
  }
}

export { App };