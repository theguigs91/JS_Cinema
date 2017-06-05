/**
 * Created by presci on 04/06/17.
 */
import 'isomorphic-fetch'
import store from '../store'
import * as movie_actions from '../actions/movie-actions'

export function fetch_DisplayMovies() {
    console.log("fetch display movies");
    return (dispatch) => {
        return loadMovies().then((json) => {
            console.log("json: ", json)
            dispatch(movie_actions.displayMovies(json))
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

export function getAllMovies() {
    return fetch('http://localhost:8080/movie')
        .then(response => response.json())
        .then(json => {
            store.dispatch(movie_actions.getAllMovies(json));
            return json;
        })
}

export function getMovieById(id) {
    return fetch('http://localhost:8080/movie/id/' + id)
        .then(response => response.json())
        .then(json => {
            store.dispatch(movie_actions.getMovieById(json));
            return json;
        })
}

export function getMovieByName(name) {
    return fetch('http://localhost:8080/movie/name/' + name)
        .then(response => response.json())
        .then(json => {
            store.dispatch(movie_actions.getMovieByName(json))
            return json;
        })
}

export function updateMovieById(id) {
    return fetch('http://localhost:8080/movie/id' + id, {
        method: 'POST',
        headers: { "Content-Type" : "application/json"  },
        body: JSON.stringify({'id' : id, 'picture' : url})
    })
        .then(response => response.json())
        .then(json => {
            store.dispatch(movie_actions.updateMovieById(json))
            return json;
        })
}