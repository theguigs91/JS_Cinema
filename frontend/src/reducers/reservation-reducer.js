import React from 'react';
import * as types from '../actions/action-types';

const initialReservationState = {
  reservations: []
};

const ReservationReducer = function(state: initialReservationState, action) {

  switch (action.type) {
    case types.ADD_RESERVATION_SUCCESS:
      return { ...state, reservations: [...state.reservations, action.reservation] };
    case types.DELETE_RESERVATION_SUCCESS:
      return state.filter(p => p.id !== action.id);
    case types.GET_RESERVATIONS_SUCCESS:
      return {...state, reservations: action.reservations};
    default:
      return {...state};
  }
};

export default ReservationReducer;
