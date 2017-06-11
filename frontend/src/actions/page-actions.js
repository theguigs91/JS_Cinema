/**
 * Created by kelly on 11/06/17.
 */

import * as types from './action-types';

/**
 * Set current url to store, for future redirection (ex: After login)
 */
export function setRedirectRoute(redirectRoute) {
  return {
    type: types.SET_REDIRECT_ROUTE,
    redirectRoute
  };
}