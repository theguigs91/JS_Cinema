/**
 * Created by kelly on 04/06/17.
 */

import axios from 'axios';
import store from '../store';
import { addReservationSuccess, getReservationsSuccess, deleteReservationSuccess } from '../actions/reservation-actions';


export function addReservation(reservation) {
  return axios.post('http://localhost:8080/reservations', JSON.parse(reservation))
    .then(response => {
      store.dispatch(addReservationsSuccess(response.data));
      return response;
    }).catch(err => {
      console.log(err.message);
    });
}

/**
 * Get all reservations
 */

export function getReservations() {
  return axios.get('http://localhost:8080/reservations')
    .then(response => {
      store.dispatch(getReservationsSuccess(response.data));
      return response;
    });
}

/**
 * Search reservations
 */

export function searchReservations(query = '') {
  return axios.get('http://localhost:8080/reservations?q='+ query)
    .then(response => {
      store.dispatch(getReservationsSuccess(response.data));
      return response;
    });
}

/**
 * Delete a reservation
 */

export function deleteReservation(reservationId) {
  return axios.delete('http://localhost:8080/reservations/' + reservationId)
    .then(response => {
      store.dispatch(deleteReservationSuccess(reservationId));
      return response;
    });
}
