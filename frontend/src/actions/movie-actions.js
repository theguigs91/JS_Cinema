import * as types from './action-types'

export function addMovie(id, name, director, time, type, description) {
  return {
    type: types.ADD_MOVIE,
    id,
    name,
    director,
    time,
    movie_type: type,
    description
  }
}

export function removeMovie(id) {
  return {
    type: types.REMOVE_MOVIE,
    id
  }
}

export function getAllMovies(payload) {
  return {
    type: types.GET_ALL_MOVIES,
    payload
  }
}

export function getAllMoviesFromDate(payload) {
  return {
    type: types.GET_ALL_MOVIES_FROM_DATE,
    payload
  }
}

export function getMovieById(payload) {
  return {
    type: types.GET_MOVIE_BY_ID,
    payload
  }
}

export function getMovieByName(payload) {
  return {
    type: types.GET_MOVIE_BY_NAME,
    payload
  }
}

export function updateMovieById(payload) {
  return {
    type: types.UPDATE_MOVIE_BY_ID,
    payload
  }
}

export function updateMovie(movie) {
  return {
    type: types.UPDATE_MOVIE_SUCCESS,
    movie
  }
}

export function getMoviesSuccess(payload) {
  return {
    type: types.GET_MOVIES_SUCCESS,
    payload
  }
}
