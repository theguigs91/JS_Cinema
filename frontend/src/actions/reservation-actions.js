import * as types from './action-types';

export function addReservationSuccess(reservation) {
  return {
    type: types.ADD_RESERVATION_SUCCESS,
    reservation
  }
}

export function deleteReservationSuccess(id) {
  return {
    type: types.DELETE_RESERVATION_SUCCESS,
    id: id
  }
}

export function getReservationsSuccess(reservations) {
  return {
    type: types.GET_RESERVATIONS_SUCCESS,
    reservations
  }
}