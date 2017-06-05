/**
 * Created by kelly on 04/06/17.
 */

import axios from 'axios';
import store from '../store';
import { getMoviesSuccess, deleteMovieSuccess, movieProfileSuccess } from '../actions/movie-actions';

/**
 * Get all movies
 */

export function getMovies() {
  return axios.get('http://localhost:8080/movies')
    .then(response => {
      store.dispatch(getMoviesSuccess(response.data));
      return response;
    });
}

/**
 * Delete a movie
 */

export function deleteMovie(movieId) {
  return axios.delete('http://localhost:8080/movies/' + movieId)
    .then(response => {
      store.dispatch(deleteMovieSuccess(movieId));
      return response;
    });
}
