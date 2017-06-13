/**
 * Created by kelly on 07/06/17.
 */

import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { persistedState } from './store';

import HeaderContainer from './components/containers/header-container';
import Home from './components/home';

import MovieListContainer from './components/containers/movie-list-container';
import LoginSignupContainer from './components/containers/login-signup-container';
import SchedulesContainer from './components/containers/seance-list-container';
import ResultsContainer from './components/containers/result-list-container';
import AboutContainer from './components/containers/about-container';
import ReservationCreationContainer from './components/containers/reservation-creation-container';
import MyReservationsContainer from './components/containers/my-reservations-container';

// -- Admin

import MovieCreationContainer from './components/containers/movie-creation-container';
import MovieDeletionContainer from './components/containers/movie-deletion-container';
import ScheduleCreationContainer from './components/containers/schedule-creation-container';
import ReservationsContainer from './components/containers/reservations-container';
import CheckLoggedInContainer from './components/containers/check-logged-in-container';

class App extends React.Component {

  renderAdmin() {

    return (
      <Router history={history}>
        <div>
          <HeaderContainer />
          <Route path="/" component={CheckLoggedInContainer} />
          <Route exact path="/" component={Home} />

          <Route exact path="/login" component={LoginSignupContainer}/>

          <Route exact path="/movies" component={MovieListContainer}/>
          <Route exact path="/movies/creation" component={MovieCreationContainer}/>
          <Route exact path="/movies/deletion/:movieId" component={MovieDeletionContainer}/>

          <Route exact path="/schedules" component={SchedulesContainer}/>
          <Route exact path="/schedules/creation" component={ScheduleCreationContainer}/>

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

          <Route path="/" component={CheckLoggedInContainer} />
          <Route exact path="/" component={Home} />

          <Route exact path="/login" component={LoginSignupContainer}/>

          <Route exact path="/movies" component={MovieListContainer}/>

          <Route exact path="/schedules" component={SchedulesContainer}/>
          <Route exact path="/schedules/:scheduleId"/>
          <Route exact path="/reservation/:seanceId" component={ReservationCreationContainer}/>

          <Route exact path="/results" component={ResultsContainer}/>
          <Route exact path="/about" component={AboutContainer}/>

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
