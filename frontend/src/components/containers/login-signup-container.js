/**
 * Created by kelly on 10/06/17.
 */

import React from 'react';
import LoginForm from '../views/login-form';
import SignupForm from '../views/signup-form';
import Banner from '../views/banner';

class LoginSignupContainer extends React.Component {

  render() {

    console.log('[LoginSignupContainer] Rendering...');

    return (
      <div>
        <Banner
          titleWhiteBefore="Connexion"
          titleYellow="&"
          titleWhiteAfter="Inscription"
          subtitle="Rejoignez-nous!"
        />
        <section className="container tm-home-section-1" id="more">
          <div className="row col-lg-offset-2 col-md-offset-2 col-sm-offset-2">
            <LoginForm logIn={this.logIn} />
            <SignupForm addUser={this.addUser} />
          </div>
        </section>
      </div>
    );
  }
}

export default LoginSignupContainer;