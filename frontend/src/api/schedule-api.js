/**
 * Created by kelly on 04/06/17.
 */

import axios from 'axios';
import store from '../store';
import { addScheduleSuccess, getSchedulesSuccess, deleteScheduleSuccess } from '../actions/schedule-actions';


let config = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  mode: 'no-cors'
};

export function addSchedule(schedule) {
  return axios.post('http://localhost:8080/seance', schedule, config)
    .then(response => {
      store.dispatch(addScheduleSuccess(schedule));
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

export function updateSchedule(schedule) {
  return axios.put('http://localhost:8080/seance', schedule, config)
    .then(response => {
      store.dispatch(schedule_actions.updateSchedule(schedule));
      return json;
    })
}

export function incrementSeancePlaces(seanceId) {
  return axios.get('http://localhost:8080/seance/id/' + seanceId + '/increment', config)
    .then(response => {
      store.dispatch(schedule_actions.incrementSeancePlaces(seanceId));
      return json;
    })
}

export function decrementSeancePlaces(seanceId) {
  return axios.get('http://localhost:8080/seance/id/' + seanceId + '/decrement', config)
    .then(response => {
      store.dispatch(schedule_actions.decrementSeancePlaces(seanceId));
      return json;
    })
}