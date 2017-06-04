import * as types from './action-types'


export function getAllUsers(payload) {
    return {
        type: types.GET_ALL_USERS,
        payload
    }
}

export function getUserById(payload) {
    return {
        type: types.GET_USER_BY_ID,
        payload
    }
}

export function getUserByLogin(payload) {
    return {
        type: types.GET_USER_BY_LOGIN,
        payload
    }
}

export function addUser(login, password) {
    return {
        type: types.ADD_USER,
        login: login,
        password: password
    }
}

export function updateUserById(id, payload) {
    return {
        type: types.UPDATE_USER_BY_ID,
        id: id,
        login: payload.login,
        password: payload.password
    }
}

export function updateUserByLogin(login, payload) {
    return {
        type: types.UPDATE_USER_BY_LOGIN,
        id: payload.id,
        login: login,
        password: payload.password
    }
}

export function deleteUserById(id) {
    return {
        type: types.DELETE_USER_BY_ID,
        id: id
    }
}

export function deleteUserByLogin(login) {
    return {
        type: types.DELETE_USER_BY_LOGIN,
        login: login
    }
}