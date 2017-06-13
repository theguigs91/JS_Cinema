import React from 'react';
import { connect } from 'react-redux';
import Reservations from '../views/reservations';
import DateForm from '../views/date-form';
import { getReservationsFromDate, getReservations } from '../../api/reservation-api';
import _ from 'lodash';
import Banner from '../views/banner';

class ReservationsContainer extends React.Component {

  componentDidMount() {
    getReservations();
  }

  selectDate(event) {
    event.preventDefault();
    getReservationsFromDate(this.dateValue);
  }

  render(){
    console.log("[ReservationsContainer] Rendering..", JSON.stringify(this.props.reservations));

    if (!_.isEmpty(this.props.reservations)) {
      return (
        <div>
          <Banner
            titleWhiteBefore="Toutes les"
            titleYellow="réservations"
            titleWhiteAfter=""
            subtitle="Gestion des réservations"
          />
          <DateForm
            selectDate={this.selectDate}
            buttonStr="Voir les réservations"
          />
          <Reservations
            reservations={this.props.reservations}
          />
        </div>
      );
    }
    else {
      return (
        <div>
          <Banner
            titleWhiteBefore="Toutes les"
            titleYellow="réservations"
            titleWhiteAfter=""
            subtitle="Gestion des réservations"
          />
          <DateForm
            selectDate={this.selectDate}
            buttonStr="Voir les réservations"
          />
        </div>
      );
    }
  }
}

const mapStateToProps = store => {
  return {
    reservations: store.reservationState.reservations
  }
};

export default connect(mapStateToProps)(ReservationsContainer);