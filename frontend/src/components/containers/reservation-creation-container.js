/**
 * Created by kelly on 06/06/17.
 */

import React from 'react';
import { connect } from 'react-redux';
import * as reservationApi from '../../api/reservation-api';
import * as scheduleApi from '../../api/schedule-api';
import ReservationCreationForm from '../views/reservation-creation-form';
import * as CONST from '../../const';

const ReservationCreationContainer = React.createClass({

  componentWillMount() {
    this.totalPrice = CONST.TICKET_PRICE;
    this.user = {
      "id": 4,
      "login": "kelly",
      "password": "root"
    };
    this.movie =   {
      "id": 4,
      "name": "MOI, MOCHE ET MÉCHANT 3",
      "realisator": "Kyle Balda",
      "time": "01:25:00",
      "genre": "Animation",
      "description": "Dans ce troisième volet, Balthazar Bratt, un ancien enfant star reste obnubilé par le rôle qu'il a interprété dans les années 80. Il va devenir l'ennemi juré de Gru.",
      "date": "2017-07-04T22:00:00.000Z"
    };
    this.seance = {
      "id": 12,
      "room_id": 1,
      "movie_id": 4,
      "places_available": 380,
      "date": "2017-06-24T22:00:00.000Z",
      "time": "16:10:00"
    };
    this.room = {
      "id": 1,
      "numero": 1,
      "places_max": 380
    };
  },

  validate(reservation) {
    console.log(reservation);

    const errors = {};
    //if (!reservation.user_id || reservation.user_id.trim === '')
    //  errors.user_id = 'Veuillez vous connecter.';
    //if (!reservation.seance_id || reservation.seance_id.trim === '')
    //  errors.seance_id = 'Séance inconnue.';
    //if (!reservation.price || reservation.price.trim === '' )
    //  errors.total_price = 'Erreur de prix';
    if (!reservation.number_seats || reservation.number_seats.trim === '')
      errors.number_seats = 'Veuillez choisir le nombre de places.';

    return errors;
  },

  addReservation(event) {
    event.preventDefault();

    console.log('ReservationCreationContainer.addReservation');

    let reservation = this.refs.child.getReservation();
    let errors = this.validate(reservation);
    if (_.isEmpty(errors)) {

      for (let i = 0; i < reservation.number_seats; i++) {
        let reservation = {
          user_id: this.user.id, // reservation.user_id
          seance_id: this.seance.id // reservation.seance_id
        };
        console.log(reservation);
        reservationApi.addReservation(reservation);
        scheduleApi.decrementSeancePlaces(this.seance.id);
      }
    }
    else
      console.log("errors: ", errors);
  },

  updateTotalPrice(event) {
    event.preventDefault();

    console.log('updateTotalPrice');
    let numberSeats = this.refs.child.getNumberSeats();
    if (numberSeats >= 0)
      this.totalPrice = (numberSeats * CONST.TICKET_PRICE).toFixed(2);
    console.log('totalPrice: ', this.totalPrice);
    this.setState({total_price: this.totalPrice});
  },

  render: function() {
    return (
      <ReservationCreationForm
        addReservation={this.addReservation}
        movie={this.movie}
        seance={this.seance}
        room={this.room}
        updateTotalPrice={this.updateTotalPrice}
        totalPrice={this.totalPrice}
        ref="child"
      />
    )
  }
});

const mapStateToProps = store => {
  return {
    movie: store.movieState.movie,
    seance: store.scheduleState.seance,
    reservations: store.reservationState.reservations
  }
};

export default connect(mapStateToProps)(ReservationCreationContainer);
