import React from 'react';
import Reservations from '../views/reservations';
import { getMoviesFromUserId } from '../../api/movie-api';
import { getSchedulesFromUserId } from '../../api/schedule-api';
import { getReservationsFromUserId } from '../../api/reservation-api';
import { connect } from 'react-redux';

class MyReservationsContainer extends React.Component {

  componentDidMount() {
    // TODO: To replace by current user id.
    let userId = 4;
    getReservationsFromUserId(userId);
  }

  render() {
    if (!_.isEmpty(this.props.reservations)) {
      return (
          <Reservations
            reservations={this.props.reservations}
          />
      );
    }
    else
      return null;
  }
}

const mapStateToProps = store => {
  return {
    reservations: store.reservationState.reservations
  }
};

export default connect(mapStateToProps)(MyReservationsContainer);