import fetch from 'isomorphic-fetch'
import * as types from './action-types';

export function addReservation(id, userId, scheduleId) {
  return {
    type: types.ADD_RESERVATION,
    id: id,
    user_id: userId,
    schedule_id: scheduleId
  }
}

export function removeReservation(id) {
  return {
    type: types.REMOVE_RESERVATION,
    id: id
  }
}

export function displayReservations(payload) {
  return {
    type: types.DISPLAY_RESERVATIONS,
    payload
  };
}

export function getReservations(reservations) {
  return {
    type: types.GET_RESERVATIONS,
    reservations
  }
}

export function getReservationsSuccess(reservations) {
  return {
    type: types.GET_RESERVATIONS_SUCCESS,
    reservations
  }
}

export function fetch_DisplayReservations() {
  console.log("fetch display reservations");
  return (dispatch) => {
    return loadReservations().then((json) => {
      console.log("json: ", json);
      dispatch(displayReservations(json))
    })
  }
}

function loadReservations() {
  console.log("Load reservations from server");
  return fetch("http://localhost:8080/reservations")
    .then(response => {
      return response.json()
    })
}
