import React, { PropTypes } from 'react';
import Reservation from './reservation';
import * as reservationApi from '../../api/reservation-api';

const Reservations = React.createClass({

  deleteReservation: function() {
    reservationApi.deleteReservation(this.refs.child.value);
  },

  render: function() {

    if (!_.isEmpty(this.props.reservations)) {
      return (
        <section className="container tm-home-section-1" id="more">
          <div className="section-margin-top">
            {
              this.props.reservations.map(reservation => {
                return (
                  <Reservation
                    onClickButtonFunc={this.deleteReservation}
                    reservation={reservation}
                    buttonGlyphicon="glyphicon-remove"
                    value={JSON.stringify(reservation)}
                    ref="child"
                  />
                )
              })
            }
          </div>
        </section>
      );
    }
    else {
      return (
        <section className="container tm-home-section-1" id="more">
          <div className="section-margin-top">
          </div>
        </section>
      );
    }
  }
});

Reservations.propTypes = {
  reservations: PropTypes.array.isRequired
};

export default Reservations;