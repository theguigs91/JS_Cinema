import React from 'react';
import * as types from '../actions/action-types';

const initialScheduleState = {
  schedules: []
};

const scheduleReducer = function (state = initialScheduleState, action) {

  console.log("Action payload: ", action.payload);

  switch (action.type) {
    case types.ADD_SCHEDULE_SUCCESS:
      return { ...state, schedules: [...state.schedules, action.schedule] };
    case types.DELETE_SCHEDULE_SUCCESS:
      return {...state, schedules: state.schedules.filter(p => p.id !== action.id) };
    case types.GET_SCHEDULES_SUCCESS:
      return {...state, schedules: action.schedules};
    case types.GET_SCHEDULE_SUCCESS:
      return {...state, schedule: action.schedule};
    case types.GET_SCHEDULES_FROM_DATE_SUCCESS:
      return {...state, schedules: action.schedules};
    case types.GET_SCHEDULES_OF_A_MOVIE_SUCCESS:
        return {...state, schedules: [...state.schedules, action.schedules] };
    default:
      return {...state};
  }
};

export default scheduleReducer;