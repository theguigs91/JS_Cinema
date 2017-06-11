import * as types from './action-types';

export function addScheduleSuccess(schedule) {
  console.log("schedule-actions.addSchedule: ", schedule);
  return {
    type: types.ADD_SCHEDULE_SUCCESS,
    room_id: schedule.room_id,
    movie_id: schedule.movie_id,
    date: schedule.date,
    time: schedule.time,
    places_available: schedule.places_available,
  }
}

export function deleteScheduleSuccess(id) {
  return {
    type: types.DELETE_SCHEDULE_SUCCESS,
    id: id
  }
}

export function getSchedulesSuccess(schedules) {
  return {
    type: types.GET_SCHEDULES_SUCCESS,
    schedules
  }
}

export function getScheduleSuccess(schedule) {
  return {
    type: types.GET_SCHEDULE_SUCCESS,
    schedule
  }
}

export function getSchedulesOfAMovieSuccess(schedules) {
  console.log("[ACTION] schedules: ", schedules)
    return {
        type: types.GET_SCHEDULES_OF_A_MOVIE_SUCCESS,
        schedules
    }
}

export function getSchedulesFromDateSuccess(schedules) {
  console.log("[ACTION] schedules: ", schedules)
  return {
    type: types.GET_SCHEDULES_FROM_DATE_SUCCESS,
    schedules
  }
}

export function incrementSeancePlaces(id) {
  return {
    type: types.INCREMENT_SEANCE_PLACES,
    id
  }
}

export function decrementSeancePlaces(id) {
  return {
    type: types.DECREMENT_SEANCE_PLACES,
    id
  }
}