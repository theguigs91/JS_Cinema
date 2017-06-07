/**
 * Created by kelly on 04/06/17.
 */

import axios from 'axios';
import store from '../store';
import { addReservationSuccess, getReservationsSuccess, deleteReservationSuccess } from '../actions/reservation-actions';
import { incrementSeancePlaces, decrementSeancePlaces } from '../actions/schedule-actions';


var config = {
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

      store.dispatch(addReservationSuccess(reservation));

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
      store.dispatch(getReservationsSuccess(response.data));
      return response;
    });
}

/**
 * Search reservations
 */

export function searchReservationsSuccess(query = '') {
  return axios.get('http://localhost:8080/reservation?q='+ query)
    .then(response => {
      store.dispatch(getReservationsSuccess(response.data));
      return response;
    });
}

/**
 * Delete a reservation
 */

export function deleteReservation(reservation) {
  return axios.delete('http://localhost:8080/reservation/' + reservation.id)
    .then(response => {

      console.log('[ReservationAPI] Before dispatch. Current state:');
      console.log(store.getState());
      console.log('--------------');

      store.dispatch(deleteReservationSuccess(reservation.id));

      console.log('[ReservationAPI] After dispatch. Current state:');
      console.log(store.getState());
      console.log('--------------');

      return response;
    });
}