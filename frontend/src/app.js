import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
// TODO: MUIThemeProvider
import { App } from './router';


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
