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

export function getAllMovies(payload) {
    return {
        type: types.GET_ALL_MOVIES,
        payload: payload
    }
}

export function getMovieById(payload) {
    return {
        type: types.GET_MOVIE_BY_ID,
        payload: payload
    }
}

export function getMovieByName(payload) {
    return {
        type: types.GET_MOVIE_BY_NAME,
        payload: payload
    }
}

export function updateMovieById(payload) {
    return {
        type: types.UPDATE_MOVIE_BY_ID,
        payload: payload
    }
}
