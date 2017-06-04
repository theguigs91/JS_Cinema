import fetch from 'isomorphic-fetch'
import * as types from './action-types'

export function addMovie(id, name, director, time, type, description) {
    return {
        type: types.ADD_MOVIE,
        id: id,
        name: name,
        director: director,
        time: time,
        movie_type: type,
        description: description
    }
}

export function removeMovie(id) {
    return {
        type: types.REMOVE_MOVIE,
        id: id
    }
}

export function displayMovies(payload) {
    return {
        type: types.DISPLAY_MOVIES,
        payload
    };
}

