/**
 * Created by kelly on 10/06/17.
 */

import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as userApi from '../../api/user-api';
import LoginForm from '../views/login-form';
import SignupForm from '../views/signup-form';
import * as StringHelper from '../../helpers/string-helper';

class LoginSignupContainer extends React.Component {

  // -- Sign up --

  validate(user) {

    console.log(user);

    const errors = {};
    if (!user.login || user.login.trim === '')
      errors.login = 'Veuillez entrer un identifiant.';
    if (!user.email || user.email.trim === '' || !StringHelper.isValidEmail(user.email))
      errors.email = 'Veuillez entrer une adresse mail valide.';
    if (!user.password || user.password.trim === '')
      errors.password = 'Veuillez entrer un mot de passe.';
    if (!user.password_confirmation || user.password_confirmation.trim === '')
      errors.password = 'Veuillez confirmation votre mot de passe.';
    if (user.password !== user.password_confirmation)
      errors.password = 'Les mots de passe doivent être identiques.';
    if (!user.lastname || user.lastname.trim === '')
      errors.lastname = 'Veuillez entrer votre nom.';
    if (!user.firstname || user.firstname.trim === '')
      errors.realisator = 'Veuillez entrer votre prénom.';
    if (!user.birthdate || user.birthdate.trim === '' )
      errors.birthdate = 'Veuillez remplir votre date d\'anniversaire.';
    if (!user.gender || user.gender.trim === '')
      errors.gender = 'Champ \'sexe\' invalide.';

    return errors;
  }

  addUser() {
    let user = this.getUser();
    console.log('[LoginSignupContainer] addUser', user);

    let errors = validate(user);
    if (_.isEmpty(errors))
      userApi.addUser(user);
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