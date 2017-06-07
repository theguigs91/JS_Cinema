/**
 * Created by kelly on 04/06/17.
 */

import axios from 'axios';
import store from '../store';
import 'isomorphic-fetch'
import { addScheduleSuccess, getSchedulesSuccess, getSchedulesFromDateSuccess, getSchedulesOfAMovieSuccess, deleteScheduleSuccess } from '../actions/schedule-actions';
import * as movieApi from './movie-api'

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
export function getAllSchedules() {
  return fetch('http://localhost:8080/seance')
      .then(response => response.json())
      .then(json => {
          json.map(el => {
                movieApi.getMovieById(el.movie_id)
                  .then((m) => {
                      el["movie_name"] = m[0].name;
                      el["movie_duration"] = m[0].time;
                      el["movie_realisator"] = m[0].realisator;
                      el["movie_genre"] = m[0].genre;
                      el["movie_description"] = m[0].description;
                  })
                   .then(() => store.dispatch(addScheduleSuccess(el)))
          })
          console.log("Json with movie:", JSON.stringify(json));
          store.dispatch(getSchedulesSuccess(json));

          return json;
      })
      //.then((json) => { console.log(json);})
}

export function getAllSchedulesOfAMovie(movie_id, date) {
    return fetch("http://localhost:8080/seance/movie/" + movie_id + "/date/" + date)
        .then(response => response.json())
        .then((json) =>{
            store.dispatch(getSchedulesOfAMovieSuccess(json))
            return json
        })
}
export function getAllSchedulesFromDate(date) {
  return fetch("http://localhost:8080/seance/date/" + date)
    .then(response => response.json())
    .then((json) =>{
      store.dispatch(getSchedulesFromDateSuccess(json))
      return json
    })
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