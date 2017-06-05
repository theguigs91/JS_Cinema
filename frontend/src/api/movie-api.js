/**
 * Created by kelly on 04/06/17.
 */

/*import store from '../store';
import { getMoviesSuccess } from '../actions/movie-actions';*/

/**
 * Search movies
 * @param query
 */
/*export function searchMovies(query = '') {
  console.log("Load movies whose title contains given words, from server");
  return fetch('http://localhost:8080/movies?q=' + query)
    .then(response => {
      store.dispatch(getMoviesSuccess(response.json()));
      return response;
    });
}*/

/*export function fetchDisplaySearchMovies() {
  console.log("fetch display movies");
  return (dispatch) => {
    return searchMovies().then((json) => {
      console.log("json: ", json);
      dispatch(displayMovies(json));
    });
  }
}*/

import axios from 'axios';
import store from '../store';
import { addMovieSuccess, getMoviesSuccess, deleteMovieSuccess } from '../actions/movie-actions';

/**
 * Add movie
 */

var config = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  mode: 'no-cors'
};

export function addMovie(movie) {

  console.log("movie-api: addMovie ", movie);

  return axios.post('http://localhost:8080/movie', movie, config)
    .then(response => {
      store.dispatch(addMovieSuccess(response.data));
      return response;
    }).catch(err => {
      console.log(err.message);
    });
}

export function addMovie2(movie) {

  console.log("movie-api: addMovie ", movie);
  let json = JSON.stringify(movie);

  console.log(json);

  return fetch('http://localhost:8080/movie', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    mode: 'no-cors',
    body: json/*
      name: movie.name,
      realisator: movie.realisator,
      date: movie.date,
      time: movie.time,
      genre: movie.genre,
      description: movie.description*/
    }).then(() => store.dispatch(addMovieSuccess(movie)));
}

/**
 * Get all movies
 */
export function getMovies() {
  return axios.get('http://localhost:8080/movie')
    .then(response => {
      store.dispatch(getMoviesSuccess(response.data));
      return response;
    });
}

/**
 * Search movies
 */
export function searchMovies(query = '') {
  return axios.get('http://localhost:8080/movie?q='+ query)
    .then(response => {
      store.dispatch(getMoviesSuccess(response.data));
      return response;
    });
}

/**
 * Delete a movie
 */
export function deleteMovie(movieId) {
  return axios.delete('http://localhost:8080/movie/' + movieId)
    .then(response => {
      store.dispatch(deleteMovieSuccess(movieId));
      return response;
    });
}
