import React from 'react';
import Reservations from '../views/reservations';
import { getReservationsFromUserId } from '../../api/reservation-api';
import { connect } from 'react-redux';
import { persistedState } from '../../store';
import _ from 'lodash';
import Banner from '../views/banner';


class MyReservationsContainer extends React.Component {

  componentDidMount() {
    getReservationsFromUserId(persistedState().loggedInUser.id);
  }

  render() {
    if (!_.isEmpty(this.props.reservations)) {
      return (
          <div>
            <Banner
              titleWhiteBefore="Mes"
              titleYellow="réservations"
              titleWhiteAfter=""
              subtitle="Mon historique"
            />
            <Reservations
              reservations={this.props.reservations}
            />
          </div>
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