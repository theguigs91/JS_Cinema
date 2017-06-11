import { createStore } from 'redux';
import reducers from './reducers';
import { loadState, saveState } from './local-storage';

export const persistedState = loadState();
const store = createStore(
  reducers,
  persistedState
);

store.subscribe(() => {
  console.log('[Store] subscribe persistedState: ', persistedState);
});

export function saveStore() {

  console.log('[Store] saveStore isLogged In [', store.getState().userState.isLoggedIn, '], loggedUser [', store.getState().userState.loggedInUser, ']');

  saveState({
    isLoggedIn: store.getState().userState.isLoggedIn,
    loggedInUser: store.getState().userState.loggedInUser
  });
}

export default store;