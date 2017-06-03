import fetch from 'isomorphic-fetch'

export const DISPLAY_MOVIES = "DISPLAY_MOVIES";
export const ADD_MOVIE = "ADD_MOVIE";
export const REMOVE_MOVIE = "REMOVE_MOVIE";

export function addMovie(id, name, director, time, type, description) {
    return {
        type: ADD_MOVIE,
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
        type: REMOVE_MOVIE,
        id: id
    }
}

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