import React from 'react';
import * as types from '../actions/action-types';

const initialState = {
    movies: []
};

const movieReducer = function (state = initialState, action) {

    console.log("Action type: ", action.type)
    console.log("Action payload: ", action.payload)

    switch (action.type) {
        case 'ADD_MOVIE':
            return [...state, {movies: action.payload}];
      case 'DELETE_MOVIE':
            return {...state, movies: state.filter(movie => movie.id !== action.id)};
        case types.GET_ALL_MOVIES:
            return {...state, movies: action.payload};
        case types.GET_ALL_MOVIES_FROM_DATE:
            return {...state, movies: action.payload};
        case types.GET_MOVIES_SUCCESS:
            return state;
        case types.GET_MOVIE_BY_ID:
            return state;
        case types.GET_MOVIE_BY_NAME:
            return state;
        case types.UPDATE_MOVIE_BY_ID:
            return state;
        default:
            return state;
    }
}

export default movieReducer