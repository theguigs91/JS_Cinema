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



    return {
      isLoggedIn: false,
      loggedInUser: undefined
    };
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log(err.message);
    // Ignore write errors.
  }
};

export const destroyState = () => {
  try {
    localStorage.removeItem('state');
    localStorage.setItem('state', {
      isLoggedIn: false,
      loggedInUser: undefined
    });

    console.log('[LocalStorage] destroyState localStorage: ', localStorage);

  } catch (err) {
    console.log(err.message);
    // Ignore write errors.
  }
};