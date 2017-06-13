import React, { PropTypes } from 'react';
import Reservation from './reservation';
import * as reservationApi from '../../api/reservation-api';
import * as scheduleApi from '../../api/schedule-api';

class Reservations extends React.Component {

  deleteReservation(reservation) {
    console.log('deleteReservation ', reservation);
    reservationApi.deleteReservation(reservation).then(() => {
      console.log('incrementSeancePlaces');
      scheduleApi.incrementSeancePlaces(reservation.seance_id).then(() => {
        console.log('this.setState');
        this.setState({deleted: reservation.id});
      });
    });
  }

  render() {
    console.log('[Reservations] Rendering ... ', this.props.reservations);

    return (
      <section className="container tm-home-section-1" id="more">
        <div className="section-margin-top">
          {
            this.props.reservations.map(reservation => {
              return (
                <Reservation
                  key={reservation.id}
                  onClickButtonFunc={this.deleteReservation.bind(this, reservation)}
                  buttonStr=""
                  reservation={reservation}
                  buttonGlyphicon="glyphicon-remove"
                />
              )
            })
          }
        </div>
      </section>
    );
  }
}

Reservations.propTypes = {
  reservations: PropTypes.array.isRequired
};

export default Reservations;