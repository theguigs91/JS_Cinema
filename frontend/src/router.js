/**
 * Created by kelly on 07/06/17.
 */

import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { persistedState } from './store';

import HeaderContainer from './components/containers/header-container';
import Banner from './components/views/banner';
import Home from './components/home';

//import UserListContainer from './components/containers/user-list-container';
//import UserProfileContainer from './components/containers/user-profile-container';

import MovieListContainer from './components/containers/movie-list-container';
import LoginSignupContainer from './components/containers/login-signup-container';
//import MoviesContainer from './components/containers/movies-container';
import SchedulesContainer from './components/containers/seance-list-container';
import SearchMovieContainer from './components/containers/search-movie-container';
import ResultsContainer from './components/containers/result-list-container';

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
import CheckLoggedInContainer from './components/containers/check-logged-in-container';

class App extends React.Component {

  renderAdmin() {

    return (
      <Router history={history}>
        <div>
          <HeaderContainer />
          <Banner />

          <Route path="/" component={CheckLoggedInContainer} />
          <Route exact path="/" component={Home} />

          <Route exact path="/login" component={LoginSignupContainer}/>

          <Route exact path="/movies" component={MovieListContainer}/>
          <Route exact path="/movies/creation" component={MovieCreationContainer}/>
          <Route exact path="/movies/edition/:movieId" component={MovieEditionContainer}/>
          <Route exact path="/movies/admin" component={AdminMoviesContainer}/>

          <Route exact path="/schedules" component={SchedulesContainer}/>
          <Route exact path="/schedules/creation" component={ScheduleCreationContainer}/>
          <Route exact path="/schedules/:scheduleId"/>

          <Route exact path="/results" component={ResultsContainer}/>

          <Route exact path="/reservation/:seanceId" component={ReservationCreationContainer}/>
          <Route exact path="/myreservations" component={MyReservationsContainer}/>
          <Route exact path="/reservations" component={ReservationsContainer}/>
        </div>
      </Router>
    )
  }

  renderVisitor() {

    return (
      <Router history={history}>
        <div>
          <HeaderContainer />
          <Banner />

          <Route path="/" component={CheckLoggedInContainer} />
          <Route exact path="/" component={Home} />

          <Route exact path="/login" component={LoginSignupContainer}/>

          <Route exact path="/movies" component={MovieListContainer}/>

          <Route exact path="/schedules" component={SchedulesContainer}/>
          <Route exact path="/schedules/:scheduleId"/>

          <Route exact path="/results" component={ResultsContainer}/>

          <Route exact path="/reservation/:seanceId" component={ReservationCreationContainer}/>
          <Route exact path="/myreservations" component={MyReservationsContainer}/>
        </div>
      </Router>
    )
  }

  renderDefault() {

    return (
      <Router history={history}>
        <div>
          <HeaderContainer />
          <Banner />

          <Route path="/" component={CheckLoggedInContainer} />
          <Route exact path="/" component={Home} />

          <Route exact path="/login" component={LoginSignupContainer}/>

          <Route exact path="/movies" component={MovieListContainer}/>

          <Route exact path="/schedules" component={SchedulesContainer}/>
          <Route exact path="/schedules/:scheduleId"/>

          <Route exact path="/results" component={ResultsContainer}/>
        </div>
      </Router>
    )
  }

  render() {

    let pState = persistedState();

    if (!pState || !pState.loggedInUser)
      return this.renderDefault();

    switch (pState.loggedInUser.role_name) {
      case 'admin':
        return this.renderAdmin();
      case 'visitor':
        return this.renderVisitor();
      default:
        return this.renderDefault();
    }
  }
}

export { App };
