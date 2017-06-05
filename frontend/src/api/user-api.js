/**
 * Created by presci on 04/06/17.
 */
import "isomorphic-fetch"
import store from '../store'
import * as user_actions from '../actions/user-actions'

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

export function addUser(login, password) {
    return fetch('http://localhost:8080/user', {
        method: 'POST',
        headers: { "Content-Type" : "application/json"  },
        body: JSON.stringify({'login' : login, 'password' : password})
    })
        .then(() => store.dispatch(user_actions.addUser(login, password)))
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