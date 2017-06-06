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
    this.movie = {
      "id": 5,
      "name": "Your name",
      "realisator": "Makoto Shinkai",
      "time": "01:46:00",
      "genre": "Animation",
      "description": "Mitsuha, adolescente coincée dans une famille traditionnelle, rêve de quitter ses montagnes natales pour découvrir la vie trépidante de Tokyo. Elle est loin d’imaginer pouvoir vivre l’aventure urbaine dans la peau de… Taki, un jeune lycéen vivant à Tokyo, occupé entre son petit boulot dans un restaurant italien et ses nombreux amis. À travers ses rêves, Mitsuha se voit littéralement propulsée dans la vie du jeune garçon au point qu’elle croit vivre la réalité... Tout bascule lorsqu’elle réalise que Taki rêve également d’une vie dans les montagnes, entouré d’une famille traditionnelle… dans la peau d’une jeune fille ! Une étrange relation s’installe entre leurs deux corps qu’ils accaparent mutuellement. Quel mystère se cache derrière ces rêves étranges qui unissent deux destinées que tout oppose et qui ne se sont jamais rencontrées ?",
      "date": "2016-12-27T23:00:00.000Z"
    };
    this.seance = {
      "id": 1,
      "room_id": 6,
      "movie_id": 5,
      "places_available": 178,
      "date": "2017-06-11T22:00:00.000Z",
      "time": "13:30:00"
    }
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
