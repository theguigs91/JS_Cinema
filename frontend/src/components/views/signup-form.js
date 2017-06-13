/**
 * Created by kelly on 10/06/17.
 */

import React, { PropTypes } from 'react';
import * as StringHelper from '../../helpers/string-helper';
import _ from 'lodash';
import * as userApi from '../../api/user-api';
import ReactDOM from 'react-dom';

class SignupForm extends React.Component {

  getUser() {
    return {
      login: this.refs.login.value,
      email: this.refs.email.value,
      password: this.refs.password.value,
      password_confirmation: this.refs.password_confirmation.value,
      lastname: this.refs.lastname.value,
      firstname: this.refs.firstname.value,
      birthdate: this.refs.birthdate.value,
      gender: this.refs.gender.value
    }
  }

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
      errors.firstname = 'Veuillez entrer votre prénom.';
    if (!user.birthdate || user.birthdate.trim === '' )
      errors.birthdate = 'Veuillez remplir votre date d\'anniversaire.';
    if (!user.gender || user.gender.trim === '')
      errors.gender = 'Champ \'sexe\' invalide.';

    return errors;
  }

  addUser(event) {
    event.preventDefault();

    let user = this.getUser();
    console.log('[SignupForm] addUser', user);

    let errors = this.validate(user);
    if (_.isEmpty(errors)) {
      console.log('userApi.addUser', user);
      userApi.addUser(user);
      ReactDOM.render(<p>Vous pouvez dès à présent vous connecter</p>, document.getElementById('msg-sign'));
    }
    else
      console.log("errors: ", errors);
      var errMsg= "";

      for (var err in errors){
        errMsg += errors[err] + '\n';
      }
    ReactDOM.render(<p>{errMsg}</p>, document.getElementById('msg-sign'));
  }

  render() {
    return (
      <div className="col-lg-5 col-md-5 col-sm-5">
        <div className="tm-home-box-1">
          <ul className="tm-home-title tm-yellow-bg">Inscription</ul>

          <div className="tm-white-bg">
            <div className="tm-search-box effect2">
              <form onSubmit={this.addUser.bind(this)} method="post" className="signup-form">
                <div className="tm-form-inner">
                  <div className="form-group">
                    <label for="input-login-signup">Login</label>
                    <input type="text" className="form-control" ref="login" id="input-login-signup" placeholder="Identifiant" />
                  </div>
                  <div className="form-group">
                    <label for="input-email-signup">Adresse mail</label>
                    <input type="email" className="form-control" id="input-email-signup" ref="email" aria-describedby="emailHelp" placeholder="Entrer votre adresse mail" />
                  </div>
                  <div className="form-group">
                    <label for="input-password-signup">Mot de passe</label>
                    <input type="password" className="form-control" id="input-password-signup" ref="password" placeholder="Mot de passe" />
                  </div>
                  <div className="form-group">
                    <label for="input-password-confirmation-signup">Confirmation du mot de passe</label>
                    <input type="password" className="form-control" id="input-password-confirmation-signup" ref="password_confirmation" placeholder="Confirmation du mot de passe" />
                  </div>
                  <div className="form-group">
                    <label for="input-lastname-signup">Nom</label>
                    <input type="text" className="form-control" ref="lastname" id="input-lastname-signup" placeholder="Nom" />
                  </div>
                  <div className="form-group">
                    <label for="input-firstname-signup">Prénom</label>
                    <input type="text" className="form-control" ref="firstname" id="input-firstname-signup" placeholder="Prénom" />
                  </div>
                  <div className="form-group date-time">
                    <label for="input-birthdate" className="col-form-label">Date de naissance</label>
                    <input className="form-control" type="date" ref="birthdate" id="birthdate" placeholder="2017-01-01" />
                  </div>
                  <div className="form-group">
                    <label for="gender">Sexe</label>
                    <select className="form-control" ref="gender" id="input-gender-signup">
                      <option>Homme</option>
                      <option>Femme</option>
                    </select>
                  </div>
                </div>
                <div className="form-group tm-yellow-gradient-bg text-center">
                  <button type="submit" name="submit" className="tm-yellow-btn">S'inscrire</button>
                </div>
              </form>
            </div>
          </div>
          <div id="msg-sign"></div>
        </div>
      </div>
    );
  }
}

export default SignupForm;