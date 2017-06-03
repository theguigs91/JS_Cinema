/**
 * Created by presci on 03/06/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux'
import Application from './containers/Movies/movieList'

ReactDOM.render(<Provider store={store}><Application/></Provider>, document.getElementById('root'));
