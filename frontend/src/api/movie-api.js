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