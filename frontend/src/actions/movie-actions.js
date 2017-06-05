import fetch from 'isomorphic-fetch'

export const DISPLAY_MOVIES = "DISPLAY_MOVIES";
export const ADD_MOVIE = "ADD_MOVIE";
export const REMOVE_MOVIE = "REMOVE_MOVIE";

export function addMovieSuccess(movie) {//id, name, director, date, duration, type, description) {
  console.log("movie-actions.addMovie: ", movie);
  return {
        type: types.ADD_MOVIE_SUCCESS,
        name: movie.name,
        realisator: movie.realisator,
        date: movie.date,
        time: movie.time,
        genre: movie.genre,
        description: movie.description
    }
}

export function deleteMovieSuccess(id) {
    return {
        type: types.DELETE_MOVIE_SUCCESS,
        id: id
    }
}

export function displayMovies(payload) {
    return {
        type: DISPLAY_MOVIES,
        payload
    };
}

export function getMoviesSuccess(movies) {
  return {
    type: types.GET_MOVIES_SUCCESS,
    movies
  }
}