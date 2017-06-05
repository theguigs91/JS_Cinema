import React from 'react';
import * as types from '../actions/action-types';

const initialMovieState = {
  movies: []
};

const movieReducer = function (state = initialMovieState, action) {

  console.log("Action payload: ", action.payload);

  switch (action.type) {
    case types.ADD_MOVIE_SUCCESS:
      return { ...state, movies: [...state.movies, action.movie] };
    case types.DELETE_MOVIE_SUCCESS:
      return state.filter(p => p.id !== action.id);
    case types.DISPLAY_MOVIES:
      return {...state, movies: action.payload};
    case types.GET_MOVIES_SUCCESS:
      return {...state, movies: action.movies};
    default:
      return {...state};
  }
};

export default movieReducer;
