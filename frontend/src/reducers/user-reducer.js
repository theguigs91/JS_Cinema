import React from 'react';
import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  loggedInUser: undefined,
  isLoggedIn: false,
  users: [],
  userProfile: {
    repos: []
  }
};

const userReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_USERS_SUCCESS:
      return {...state, users: action.users };
    case types.DELETE_USER_SUCCESS:
      // Use lodash to create a new user array without the user we want to remove
      const newUsers = _.filter(state.users, user => user.id !== action.userId);
      return {...state, users: newUsers };
    case types.USER_PROFILE_SUCCESS:
      return {...state, userProfile: action.userProfile };
    case types.LOGIN_SUCCESS:
      return {...state, isLoggedIn: action.isLoggedIn, loggedInUser: action.loggedInUser};
  }

  return state;

};

export default userReducer;
