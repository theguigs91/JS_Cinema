import React from 'react';
import * as types from '../actions/action-types';

const initialReservationState = {
  reservations: []
};

const reservationReducer = function(state: initialReservationState, action) {

  console.log("Action type: ", action.type);
  console.log("Action payload: ", action.payload);

  switch (action.type) {
    case types.ADD_RESERVATION_SUCCESS:
      return { ...state, reservations: [...state.reservations, action.reservation] };
    case types.DELETE_RESERVATION_SUCCESS:
      return {...state, reservations: state.reservations.filter(p => p.id !== action.id)};
    case types.DISPLAY_RESERVATIONS:
      return {...state, reservations: action.payload};
    case types.GET_RESERVATIONS_SUCCESS:
      return {...state, reservations: action.reservations};
    default:
      return {...state};
  }
};

export default reservationReducer;