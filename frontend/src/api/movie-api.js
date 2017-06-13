/**
 * Created by presci on 04/06/17.
 */
import 'isomorphic-fetch'
import store from '../store'
import * as movie_actions from '../actions/movie-actions'
import axios from 'axios';

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
      store.dispatch(movie_actions.addMovieSuccess(response.data));
      return response;
    }).catch(err => {
      console.log(err.message);
    });
}

export function getAllMovies() {
  return fetch('http://localhost:8080/movie')
    .then(response => response.json())
    .then(json => {
      store.dispatch(movie_actions.getAllMovies(json));
      return json;
    })
}

export function getAllMoviesFromDate(date) {
  return fetch("http://localhost:8080/movie/date/" + date)
    .then(response => response.json())
    .then(json => {
      store.dispatch(movie_actions.getAllMoviesFromDate(json));
      return json;
    })
}


export function getMovieById(id) {
  return fetch('http://localhost:8080/movie/id/' + id)
    .then(response => response.json())
    .then(json => {

      console.log('[MovieAPI].getMovieById Before dispatch. Current state:');
      console.log(store.getState());
      console.log('--------------');

      store.dispatch(movie_actions.getMovieById(json));

      console.log('[MovieAPI].getMovieById After dispatch. Current state:');
      console.log(store.getState());
      console.log('--------------');

      return json;
    })
}

export function getMovieByName(name) {
  return fetch('http://localhost:8080/movie/name/' + name)
    .then(response => response.json())
    .then(json => {
      store.dispatch(movie_actions.getMovieByName(json));
      return json;
    })
}

export function getMoviesFromUserId(userId) {
  return fetch('http://localhost:8080/movie/user/' + userId)
    .then(response => response.json())
    .then(json => {
      store.dispatch(movie_actions.getMoviesSuccess(json));
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
        store.dispatch(movie_actions.updateMovieById(json));
        return json;
    })
}

export function updateMovie(movie) {
  return axios.put('http://localhost:8080/movie/', movie)
    .then(response => {
      store.dispatch(movie_actions.updateMovieSuccess(movie));
      return response;
    });
}

/**
 * Search movies
 */
export function searchMovies(query = '') {
  console.log('[MovieAPI] searchMovie query: ', query);

  return fetch('http://localhost:8080/movie/name/'+ query)
    .then(response => response.json())
    .then(json => {
      console.log("[MovieAPI] searchMovie JSON result: ", json);
      store.dispatch(movie_actions.getMoviesSuccess(json));
      return json;
    });
}

/**
 * Delete a movie
 */
export function deleteMovie(movieId) {
  return axios.delete('http://localhost:8080/movie/id/' + movieId)
    .then(response => {
      store.dispatch(movie_actions.deleteMovieSuccess(movieId));
      return response;
    })
    .catch(err => {
      console.log("[MovieAPI] Cannot delete this movie")
      return false;
    });
}