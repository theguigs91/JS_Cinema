<<<<<<< Updated upstream
import React from 'react';
=======
>>>>>>> Stashed changes
import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  users: [],
  userProfile: {
    repos: []
  }
};

const userReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_USERS_SUCCESS:
      return Object.assign({}, state, { users: action.users });

    case types.DELETE_USER_SUCCESS:

      // Use lodash to create a new user array without the user we want to remove
<<<<<<< Updated upstream
      const newUsers = _.filter(state.users, user => user.id !== action.userId);
=======
      const newUsers = _.filter(state.users, user => user.id != action.userId);
>>>>>>> Stashed changes
      return Object.assign({}, state, { users: newUsers });

    case types.USER_PROFILE_SUCCESS:
      return Object.assign({}, state, { userProfile: action.userProfile });

  }

  return state;

<<<<<<< Updated upstream
};
=======
}
>>>>>>> Stashed changes

export default userReducer;
