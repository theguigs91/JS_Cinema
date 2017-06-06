/**
 * Created by kelly on 04/06/17.
 */

import axios from 'axios';
import store from '../store';
import { addScheduleSuccess, getSchedulesSuccess, deleteScheduleSuccess } from '../actions/schedule-actions';


export function addSchedule(schedule) {
  return axios.post('http://localhost:8080/seance', JSON.parse(schedule))
    .then(response => {
      store.dispatch(addScheduleSuccess(response.data));
      return response;
    }).catch(err => {
      console.log(err.message);
    });
}

/**
 * Get all schedules
 */

export function getSchedules() {
  return axios.get('http://localhost:8080/seance')
    .then(response => {
      store.dispatch(getSchedulesSuccess(response.data));
      return response;
    });
}

/**
 * Search schedules
 */

export function searchSchedules(query = '') {
  return axios.get('http://localhost:8080/seance?q='+ query)
    .then(response => {
      store.dispatch(getSchedulesSuccess(response.data));
      return response;
    });
}

/**
 * Delete a schedule
 */

export function deleteSchedule(scheduleId) {
  return axios.delete('http://localhost:8080/seance/' + scheduleId)
    .then(response => {
      store.dispatch(deleteScheduleSuccess(scheduleId));
      return response;
    });
}
