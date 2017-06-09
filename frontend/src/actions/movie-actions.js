import * as types from './action-types'

export function addMovieSuccess(movie) {
  return {
    type: types.ADD_MOVIE_SUCCESS,
    movie
  }
}

export function deleteMovieSuccess(movieId) {
  return {
    type: types.DELETE_MOVIE_SUCCESS,
    id
  }
}

export function getAllMovies(movie) {
  return {
    type: types.GET_ALL_MOVIES,
    movie
  }
}

export function getAllMoviesFromDate(movie) {
  return {
    type: types.GET_ALL_MOVIES_FROM_DATE,
    movie
  }
}

export function getMovieById(movie) {
  return {
    type: types.GET_MOVIE_BY_ID,
    movie
  }
}

export function getMovieByName(movie) {
  return {
    type: types.GET_MOVIE_BY_NAME,
    movie
  }
}

export function updateMovieById(movie) {
  return {
    type: types.UPDATE_MOVIE_BY_ID,
    movie
  }
}

export function updateMovieSuccess(movie) {
  return {
    type: types.UPDATE_MOVIE_SUCCESS,
    movie
  }
}

export function getMoviesSuccess(movie) {
  return {
    type: types.GET_MOVIES_SUCCESS,
    movie
  }
}
