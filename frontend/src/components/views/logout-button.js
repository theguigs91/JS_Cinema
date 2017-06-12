/**
 * Created by kelly on 12/06/17.
 */

import React from 'react';
import store, { destroyStore } from '../../store';
import { logOutSuccess } from '../../actions/user-actions';
import { hashHistory } from 'react-router';

class LogoutButton extends React.Component {

  logOut(event) {
    event.preventDefault();

    destroyStore();
    hashHistory.replace('/login');
    store.dispatch(logOutSuccess());
    return this.forceUpdate();
  }

  render() {

    return (
      <div className="col-lg-1 col-md-1 col-sm-1 logout" id="logout">
        <button onClick={this.logOut.bind(this)} type="button" className="btn btn-default">
          <span className="glyphicon glyphicon-log-out" aria-hidden="true"/>
        </button>
      </div>
    );
  }
}

export default LogoutButton;