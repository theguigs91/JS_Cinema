/**
 * Created by presci on 04/06/17.
 */
import "isomorphic-fetch"
import store, { saveStore, persistedState } from '../store';
import * as user_actions from '../actions/user-actions';
import { setRedirectRoute } from '../actions/page-actions';
import axios from 'axios';

export function getAllUsers() {
    return fetch('http://localhost:8080/user')
        .then(response => response.json())
        .then(json => {
            store.dispatch(user_actions.getAllUsers(json));
            return json;
        })
}

export function getUserById(id) {
    return fetch('http://localhost:8080/user/id/' + id)
        .then(response => response.json())
        .then(json => {
            store.dispatch(user_actions.getUserById(json));
            return json;
        })
}

export function getUserByLogin(login) {
  return fetch('http://localhost:8080/user/login/')
    .then(response => response.json())
    .then(json => {
        store.dispatch(user_actions.getUserByLogin(json));
        return json;
    })
}

let config = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  mode: 'no-cors'
};

/**
 * Return user if the given login and password are correct,
 * "undefined" otherwise.
 */
export function getLoggedUser(user) {

  console.log('[UserApi] getLoggedUser user: ', user);

  return axios.post('http://localhost:8080/user/authentification', user, config)
    .then(response => {

      console.log('[UserAPI].getLoggedUser Before dispatch. Current state:');
      console.log(store.getState());
      console.log('--------------');

      store.dispatch(user_actions.logInSuccess(response.data));

      console.log('[UserAPI].getLoggedUser After dispatch. Current state:');
      console.log(store.getState());
      console.log('--------------');

      return saveStore();

    }).catch(err => {
      console.log(err.message);
    });
}

export function addUser(user) {

  console.log("user-api: addUser ", user);

  return axios.post('http://localhost:8080/user', user, config)
    .then(response => {

      console.log('[UserAPI].addUser Before dispatch. Current state:');
      console.log(store.getState());
      console.log('--------------');

      store.dispatch(user_actions.addUser(response.data));

      console.log('[UserAPI].addUser After dispatch. Current state:');
      console.log(store.getState());
      console.log('--------------');

    }).catch(err => {
      console.log(err.message);
    });
}


export function updateUserById(id, login, password) {
    return fetch('http://localhost:8080/user/id/' + id, {
        method: 'PUT',
        headers: { "Content-Type" : "application/json"  },
        body: JSON.stringify({'login' : login, 'password' : password})
    })
        .then(() => store.dispatch(user_actions.updateUserById(id, { login: login, password: password})))
}

export function updateUserByLogin(id, login, password) {
    return fetch('http://localhost:8080/user/login/' + login, {
        method: 'PUT',
        headers: { "Content-Type" : "application/json"  },
        body: JSON.stringify({'login' : login, 'password' : password})
    })
        .then(() => store.dispatch(user_actions.updateUserByLogin(id, { login: login, password: password})))
}

export function deleteUserbyId(id) {
    return fetch('http://localhost:8080/user/id/' + id, {
        method: 'DELETE',
    })
        .then(() => store.dispatch(user_actions.deleteUserById(id)))
}

export function deleteUserByLogin(login) {
    return fetch('http://localhost:8080/user/login/' + login, {
        method: 'DELETE',
    })
        .then(() => store.dispatch(user_actions.deleteUserByLogin(login)))
}