import React from 'react';

const movies = function (state = {}, action) {

    console.log("Action payload: ", action.payload)

    switch (action.type) {
        case 'ADD_MOVIE':
            return [...state, {id: action.id, url: action.url}];
        case 'DELETE_MOVIE':
            return state.filter(p => p.id !== action.id);
        case 'DISPLAY_MOVIES':
            return {...state, pictures: action.payload};
        default:
            return state;
    }
}

export default movies