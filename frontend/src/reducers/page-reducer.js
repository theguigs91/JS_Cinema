/**
 * Created by kelly on 11/06/17.
 */

import React from 'react';
import * as types from '../actions/action-types';

const initialState = {
  redirectRoute: '/'
};

const pageReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.SET_REDIRECT_ROUTE:
      return {...state, redirectRoute: action.redirectRoute};
  }

  return state;

};

export default pageReducer;
