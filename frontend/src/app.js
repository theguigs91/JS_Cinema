import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { App } from './router';

import s1 from '../src/misc/css/templatemo-style.css';
import s2 from '../src/misc/css/font-awesome.min.css';
//import s3 from '../src/misc/css/flexslider.css';
import s4 from '../src/misc/css/bootstrap-datetimepicker.min.css';
import s6 from '../src/misc/css/bootstrap.min.css';
import {getMuiTheme} from "material-ui/styles/index";

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  datePicker: {
    selectColor: '#f0c40c'
  }
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);