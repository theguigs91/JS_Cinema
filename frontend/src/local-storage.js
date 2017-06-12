export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');

    console.log('[LoadStorage] LOADSTATE serializedState: ', serializedState);

    if (serializedState === null) {
      return {
        isLoggedIn: false,
        loggedInUser: undefined
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.log('[LoadStorage] LOADSTATE ERROR ', err.message);

    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};