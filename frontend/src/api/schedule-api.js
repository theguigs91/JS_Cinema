/**
 * Created by kelly on 04/06/17.
 */

import axios from 'axios';
import store from '../store';
import 'isomorphic-fetch'
import * as movieApi from './movie-api'
import * as scheduleActions from '../actions/schedule-actions';

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
      store.dispatch(scheduleActions.addScheduleSuccess(schedule));
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
      });
      console.log("Json with movie:", JSON.stringify(json));
      store.dispatch(scheduleActions.getSchedulesSuccess(json));

      return json;
    })
      //.then((json) => { console.log(json);})
}

export function getAllSchedulesOfAMovie(movie_id, date) {
  return fetch("http://localhost:8080/seance/movie/" + movie_id + "/date/" + date)
    .then(response => response.json())
    .then((json) =>{
      store.dispatch(scheduleActions.getSchedulesOfAMovieSuccess(json));
      return json
    })
}

export function getAllSchedulesFromDate(date) {
  return fetch("http://localhost:8080/seance/date/" + date)
    .then(response => response.json())
    .then((json) => {
      store.dispatch(scheduleActions.getSchedulesFromDateSuccess(json));
      return json
  })
}

export function getSchedulesFromUserId(userId) {
  return fetch("http://localhost:8080/seance/user/" + userId)
    .then(response => response.json())
    .then((json) => {
      store.dispatch(scheduleActions.getSchedulesSuccess(json));
      return json
    })
}

/**
 * Search schedules
 */
export function searchSchedules(query = '') {
  return axios.get('http://localhost:8080/seance?q='+ query)
    .then(response => {
      store.dispatch(scheduleActions.getSchedulesSuccess(response.data));
      return response;
    });
}

/**
 * Delete a schedule
 */
export function deleteSchedule(scheduleId) {
  return axios.delete('http://localhost:8080/seance/' + scheduleId)
    .then(response => {
      store.dispatch(scheduleActions.deleteScheduleSuccess(scheduleId));
      return response;
    });
}

export function updateSchedule(schedule) {
  return axios.put('http://localhost:8080/seance', schedule, config)
    .then(response => {
      store.dispatch(scheduleActions.updateSchedule(schedule));
      return response;
    })
}

export function incrementSeancePlaces(seanceId) {
  return axios.get('http://localhost:8080/seance/id/' + seanceId + '/increment', config)
    .then(response => {
      store.dispatch(scheduleActions.incrementSeancePlaces(seanceId));
      return response;
    })
}

export function decrementSeancePlaces(seanceId) {
  return axios.get('http://localhost:8080/seance/id/' + seanceId + '/decrement', config)
    .then(response => {
      store.dispatch(scheduleActions.decrementSeancePlaces(seanceId));
      return response;
    })
}