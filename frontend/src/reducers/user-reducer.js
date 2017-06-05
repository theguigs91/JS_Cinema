import React from 'react';
import * as types from '../actions/action-types';


const userReducer = function (state = {}, action) {

    console.log("Action type: ", action.type)

    switch (action.type) {
        case 'ADD_MOVIE':
            return [...state, {movies: action.payload}];
        case 'DELETE_MOVIE':
            return state.filter(movie => movie.id !== action.id);
        default:
            return state;
    }
}
export default userReducer