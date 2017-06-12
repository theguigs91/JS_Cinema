/**
 * Created by kelly on 12/06/17.
 */

import React from 'react';
import LoginButton from '../views/login-button';
import LogoutButton from '../views/logout-button';

import { Link } from 'react-router-dom';
import SearchMovieContainer from './search-movie-container';
import NavigationBar from '../views/navigation-bar';
import NavigationBarAdmin from '../views/navigation-bar-admin';
import NavigationBarVisitor from '../views/navigation-bar-visitor';

import { persistedState } from '../../store';

class HeaderContainer extends React.Component {

  renderAdmin() {
    console.log('[HeaderAdminContainer] Rendering...');
    return (
      <div className="tm-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-2 tm-site-name-container">
              <Link to="/" className="tm-site-name">JS Cinema</Link>
            </div>

            <div className="col-lg-7 col-md-7 col-sm-7">
              <nav className="tm-nav">
                <NavigationBarAdmin />
              </nav>
            </div>

            <SearchMovieContainer />
            <LogoutButton />
          </div>
        </div>
      </div>
    );
  }

  renderVisitor() {
    console.log('[HeaderVisitorContainer] Rendering...');
    return (
      <div className="tm-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-2 tm-site-name-container">
              <Link to="/" className="tm-site-name">JS Cinema</Link>
            </div>

            <div className="col-lg-7 col-md-7 col-sm-7">
              <nav className="tm-nav">
                <NavigationBarVisitor />
              </nav>
            </div>

            <SearchMovieContainer />
            <LogoutButton />
          </div>
        </div>
      </div>
    );
  }

  renderDefault() {
    console.log('[HeaderDefaultContainer] Rendering...');
    return (
      <div className="tm-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-2 tm-site-name-container">
              <Link to="/" className="tm-site-name">JS Cinema</Link>
            </div>

            <div className="col-lg-7 col-md-7 col-sm-7">
              <nav className="tm-nav">
                <NavigationBar />
              </nav>
            </div>

            <SearchMovieContainer />
            <LoginButton />
          </div>
        </div>
      </div>
    );
  }

  render() {

    let pState = persistedState();
    if (!pState || !pState.loggedInUser)
      return this.renderDefault();

    switch (pState.loggedInUser.role_name) {
      case 'admin':
        return this.renderAdmin();
      case 'visitor':
        return this.renderVisitor();
      default:
        return this.renderDefault();
    }
  }
}

export default HeaderContainer;