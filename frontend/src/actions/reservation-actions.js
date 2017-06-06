import * as types from './action-types';

export function addReservation(reservation) {
  return {
    type: types.ADD_RESERVATION_SUCCESS,
    id: reservation.id,
    user_id: reservation.user_id,
    schedule_id: reservation.schedule_id
  }
}

export function deleteReservation(id) {
  return {
    type: types.DELETE_RESERVATION_SUCCESS,
    id: id
  }
}

export function displayReservations(payload) {
  return {
    type: types.DISPLAY_RESERVATIONS,
    payload
  };
}

export function getReservationsSuccess(reservations) {
  return {
    type: types.GET_RESERVATIONS_SUCCESS,
    reservations
  }
}