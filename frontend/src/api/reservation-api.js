/**
 * Created by kelly on 04/06/17.
 */

import axios from 'axios';
import store from '../store';
import * as reservationActions from '../actions/reservation-actions';

let config = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  mode: 'no-cors'
};

export function addReservation(reservation) {
  return axios.post('http://localhost:8080/reservation', reservation, config)
    .then(response => {

      console.log('[ReservationAPI] Before dispatch. Current state:');
      console.log(store.getState());
      console.log('--------------');

      store.dispatch(reservationActions.addReservationSuccess(reservation));

      console.log('[ReservationAPI] After dispatch. Current state:');
      console.log(store.getState());
      console.log('--------------');

      return response;
    }).catch(err => {
      console.log(err.message);
    });
}

/**
 * Get all reservations
 */

export function getReservations() {
  return axios.get('http://localhost:8080/reservation')
    .then(response => {
      store.dispatch(reservationActions.getReservationsSuccess(response.data));
      return response;
    });
}

export function getReservationsFromUserId(userId) {
  return fetch("http://localhost:8080/reservation/user/" + userId)
    .then(response => response.json())
    .then((json) => {

      console.log(json);

      console.log('[ReservationAPI] Before dispatch. Current state:');
      console.log(store.getState());
      console.log('--------------');

      store.dispatch(reservationActions.getReservationsSuccess(json));

      console.log('[ReservationAPI] After dispatch. Current state:');
      console.log(store.getState());
      console.log('--------------');

      return json
    })
}

/**
 * Search reservations
 */

export function searchReservationsSuccess(query = '') {
  return axios.get('http://localhost:8080/reservation?q='+ query)
    .then(response => {
      store.dispatch(reservationActions.getReservationsSuccess(response.data));
      return response;
    });
}

/**
 * Delete a reservation
 */
export function deleteReservation(reservation) {
  console.log('[ReservationAPI.deleteReservation] ', reservation);

  return axios.delete('http://localhost:8080/reservation/id/' + reservation.id)
    .then(response => {
      console.log('[ReservationAPI] Before dispatch. Current state:');
      console.log(store.getState());
      console.log('--------------');

      store.dispatch(reservationActions.deleteReservationSuccess(reservation.id));

      console.log('[ReservationAPI] After dispatch. Current state:');
      console.log(store.getState());
      console.log('--------------');

      return response;
    });
}