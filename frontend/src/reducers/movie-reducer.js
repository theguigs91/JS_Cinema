import React from 'react';
import * as types from '../actions/action-types';

const initialState = {
    movies: []
};

const movieReducer = function (state = initialState, action) {

  console.log("Action type: ", action.type);
  console.log("Action movie: ", action.movie);

  switch (action.type) {
    case types.ADD_MOVIE_SUCCESS:
      return {...state, movie: action.movie};
    case types.DELETE_MOVIE_SUCCESS:
      return {...state, movies: state.filter(movie => movie.id !== action.id)};
    case types.GET_ALL_MOVIES:
      return {...state, movies: action.movies};
    case types.GET_ALL_MOVIES_FROM_DATE:
      return {...state, movies: action.movies};
    case types.GET_MOVIES_SUCCESS:
      return {...state, movies: action.movies};
    case types.GET_MOVIE_BY_ID:
      return {...state, movie: action.movie};
    case types.GET_MOVIE_BY_NAME:
      return {...state, movie: action.movie};
    case types.UPDATE_MOVIE_BY_ID:
      return {...state, movie: action.movie};
    case types.UPDATE_MOVIE_SUCCESS:
      return {...state, movie: action.movie};
    default:
      return state;
  }
};

export default movieReducer