/**
 * Created by presci on 03/06/17.
 */

import fetch from 'isomorphic-fetch'

export const DISPLAY_MOVIES = "DISPLAY_MOVIES";

export function displayMovies(payload) {
    return {
        type: DISPLAY_MOVIES,
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