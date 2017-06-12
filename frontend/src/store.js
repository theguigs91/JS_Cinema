import { createStore } from 'redux';
import reducers from './reducers';
import { loadState, saveState, destroyState } from './local-storage';

const store = createStore(
  reducers,
  loadState()
);

export function persistedState() {
  return loadState();
}

store.subscribe(() => {
  console.log('[Store] subscribe persistedState: ', persistedState());
});

export function saveStore() {

  console.log('[Store] saveStore isLogged In [', store.getState().userState.isLoggedIn, '], loggedUser [', store.getState().userState.loggedInUser, ']');

  saveState({
    isLoggedIn: store.getState().userState.isLoggedIn,
    loggedInUser: store.getState().userState.loggedInUser
  });
}

export function destroyStore() {
  destroyState();
  console.log('[Store] destroyStore isLogged In [', persistedState().isLoggedIn, '], loggedUser [', persistedState().loggedInUser, ']');
}

export default store;