/**
 * Created by kelly on 10/06/17.
 */

import React, { PropTypes } from 'react';

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

  render() {
    return (
      <div className="col-lg-5 col-md-5 col-sm-5">
        <div className="tm-home-box-1">
          <ul className="tm-home-title tm-yellow-bg">Inscription</ul>

          <div className="tm-white-bg">
            <div className="tm-search-box effect2">
              <form onSubmit={this.props.addUser.bind(this)} method="post" className="signup-form">
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
                  <div className="form-group">
                    <label for="input-birthdate">Date de naissance</label>
                    <div className='input-group date-time'>
                      <input type='text' className="form-control" ref="birthdate" placeholder="Date de naissance" />
                      <span className="input-group-addon">
                          <span className="fa fa-calendar" />
                      </span>
                    </div>
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
        </div>
      </div>
    );
  }
}

SignupForm.PropTypes = {
  addUser: PropTypes.func.isRequired
};

export default SignupForm;