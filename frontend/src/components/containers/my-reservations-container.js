import React from 'react';
import Reservations from '../views/reservations';
import { getReservationsFromUserId } from '../../api/reservation-api';
import { connect } from 'react-redux';
import { persistedState } from '../../store';
import _ from 'lodash';

class MyReservationsContainer extends React.Component {

  componentDidMount() {
    getReservationsFromUserId(persistedState.loggedInUser.id);
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