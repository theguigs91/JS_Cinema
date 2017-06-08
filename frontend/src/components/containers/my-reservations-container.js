import React from 'react';
import Reservations from '../views/reservations';
import { getMoviesFromUserId } from '../../api/movie-api';
import { getSchedulesFromUserId } from '../../api/schedule-api';
import { getReservationsFromUserId } from '../../api/reservation-api';
import { connect } from 'react-redux';

class MyReservationsContainer extends React.Component {

  static componentDidMount() {
    // TODO: To replace by current user id.
    let userId = 4;
    getReservationsFromUserId(userId);
  }

  render() {
    return (
      <Reservations
        reservations={this.props.reservations}
      />
    );
  }
}

const mapStateToProps = store => {
  return {
    reservations: store.reservationState.reservations
  }
};

export default connect(mapStateToProps)(MyReservationsContainer);