/**
 * Created by presci on 04/06/17.
 */
import 'isomorphic-fetch'
import store from '../store'
import * as movie_actions from '../actions/movie-actions'


let config = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  mode: 'no-cors'
};

/**
 * Add movie
 */
export function addMovie(movie) {

  console.log("movie-api: addMovie ", movie);

  return axios.post('http://localhost:8080/movie', movie, config)
    .then(response => {
      store.dispatch(addMovieSuccess(response.data));
      return response;
    }).catch(err => {
      console.log(err.message);
    });
}

export function getAllMovies() {
    return fetch('http://localhost:8080/movie')
        /*.then(response => {
            store.dispatch(movie_actions.getAllMovies(response.json()))
            return response.json();
        })*/
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

/**
 * Search movies
 */
export function searchMovies(query = '') {
  return axios.get('http://localhost:8080/movie?q='+ query)
    .then(response => {
      store.dispatch(getMoviesSuccess(response.data));
      return response;
    });
}

/**
 * Delete a movie
 */
export function deleteMovie(movieId) {
  return axios.delete('http://localhost:8080/movie/' + movieId)
    .then(response => {
      store.dispatch(deleteMovieSuccess(movieId));
      return response;
    });
}