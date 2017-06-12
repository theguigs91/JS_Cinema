import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
// TODO: MUIThemeProvider
import { App } from './router';

import s1 from '../src/misc/css/templatemo-style.css';
import s2 from '../src/misc/css/font-awesome.min.css';
import s3 from '../src/misc/css/flexslider.css';
import s4 from '../src/misc/css/bootstrap-datetimepicker.min.css';
import s6 from '../src/misc/css/bootstrap.min.css';

// State will "flow" down from here thanks to the Provider component

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
