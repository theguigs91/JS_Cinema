import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
// TODO: MUIThemeProvider
import { App } from './router';
import { HashRouter as Router } from 'react-router-dom';
import Search from './components/containers/search-movie-container';
import NavigationBar from './components/views/navigation-bar-visitor';

import s1 from '../src/misc/css/templatemo-style.css';
import s2 from '../src/misc/css/font-awesome.min.css';
//import s3 from '../src/misc/css/flexslider.css';
import s4 from '../src/misc/css/bootstrap-datetimepicker.min.css';
import s6 from '../src/misc/css/bootstrap.min.css';

// State will "flow" down from here thanks to the Provider component

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Search />
    </Router>
  </Provider>,
  document.getElementById('search')
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <NavigationBar />
    </Router>
  </Provider>,
  document.getElementById('nav')
);