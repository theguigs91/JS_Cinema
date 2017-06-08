import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
// TODO: MUIThemeProvider
import { App } from './router';

// State will "flow" down from here thanks to the Provider component

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
