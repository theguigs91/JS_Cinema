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

export function fetch_DisplayMovies() {
    console.log("fetch display movies");
    return (dispatch) => {
        return loadMovies().then((json) => {
            console.log("json: ", json)
            dispatch(displayMovies(json))
        })
    }
}

function loadMovies() {
    console.log("Load movies from server");
    return fetch("http://localhost:8080/movies")
        .then(response => {
            return response.json()
        })
}