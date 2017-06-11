/**
 * Created by kelly on 10/06/17.
 */

import React, { PropTypes } from 'react';
import store from '../../store';

class LoginForm extends React.Component {

  getUserFormInfo() {
    return {
      login: this.refs.login.value,
      password: this.refs.password.value
    }
  }

  render() {
    console.log('[Loginform] render', store.getState());

    return (
      <div className="col-lg-5 col-md-5 col-sm-5">
        <div className="tm-home-box-1">
          <ul className="tm-home-title tm-yellow-bg">Connexion</ul>

          <div className="tm-white-bg">
            <div className="tm-search-box effect2">
              <form onSubmit={this.props.logIn.bind(this)} method="post" className="login-form">
                <div className="tm-form-inner">
                  <div className="form-group">
                    <label for="input-email-login">Identifiant</label>
                    <input type="text" className="form-control" id="input-login" ref="login" placeholder="Entrer votre identifiant"/>
                  </div>
                  <div className="form-group">
                    <label for="input-password-login">Mot de passe</label>
                    <input type="password" className="form-control" id="input-password-login" ref="password" placeholder="Mot de passe"/>
                  </div>
                </div>
                <div className="form-group tm-yellow-gradient-bg text-center">
                  <button type="submit" name="submit" className="tm-yellow-btn">Se connecter</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LoginForm.PropTypes = {
  logIn: PropTypes.func.isRequired
};

export default LoginForm;