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