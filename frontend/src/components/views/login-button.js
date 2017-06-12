/**
 * Created by kelly on 12/06/17.
 */

import React from 'react'
import { Link } from 'react-router-dom';

class LoginButton extends React.Component {

  render() {
    return (
      <div className="col-lg-1 col-md-1 col-sm-1 login" id="login">
        <Link to="/login">
          <button type="button" className="btn btn-default">
            <span className="glyphicon glyphicon-user" aria-hidden="true" />
          </button>
        </Link>
      </div>
    );
  }
}

export default LoginButton;