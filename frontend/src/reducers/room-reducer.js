import React from 'react';
import * as types from '../actions/action-types';

const initialRoomState = {
  rooms: []
};

const roomReducer = (state = initialRoomState, action) => {

  console.log("Action payload: ", action.payload);

  switch (action.type) {
    case types.ADD_ROOM_SUCCESS:
      return { ...state, rooms: [...state.rooms, action.room] };
    case types.DELETE_ROOM_SUCCESS:
      return {...state, rooms: state.rooms.filter(p => p.id !== action.id)};
    case types.GET_ROOMS_SUCCESS:
      return {...state, rooms: action.rooms};
    default:
      return {...state};
  }
};

export default roomReducer;