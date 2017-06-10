/**
 * Created by kelly on 10/06/17.
 */

import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as userApi from '../../api/user-api';
import LoginForm from '../views/login-form';
import SignupForm from '../views/signup-form';

class LoginSignupContainer extends React.Component {

  // -- Sign up --

  addUser(event) {
    event.preventDefault();

    let user = this.getUser();
    console.log('[LoginSignupContainer] addUser', user);

    let errors = this.validate(user);
    if (_.isEmpty(errors)) {
      console.log('userApi.addUser', user);
      userApi.addUser(user);
    }
    else
      console.log("errors: ", errors);
  }

  // -- Log in --

  logIn() {
    let user = this.getUser();
    console.log('[LoginSignupContainer] logIn', user);
  }

  render() {
    return (
      <section className="container tm-home-section-1" id="more">
        <div className="row col-lg-offset-2 col-md-offset-2 col-sm-offset-2">
          <LoginForm logIn={this.logIn} />
          <SignupForm addUser={this.addUser} />
        </div>
      </section>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    user: store.userState.user
  };
};

export default connect(mapStateToProps)(LoginSignupContainer);