import React from 'react';
import { connect } from 'react-redux';
import { setRedirectRoute } from '../../actions/page-actions';
import { hashHistory } from 'react-router';
import { persistedState } from '../../store';
import SearchMovieForm from "../views/search-movie-form";
import Search from './search-movie-container';
import NavBar from '../views/navigation-bar';

class CheckLoggedInContainer extends React.Component {

  componentDidMount() {

    const { dispatch } = this.props;

    console.log('[CheckLoggedInContainer] componentDidMount persistedState: ', persistedState);

    let currentRoute = this.props.location.pathname;

    if (!persistedState.isLoggedIn) {
      // The current route is set for future redirection (after login)
      if (currentRoute === 'login')
        dispatch(setRedirectRoute('/'));
      else
        dispatch(setRedirectRoute(currentRoute));

      hashHistory.replace('/login');
    }
    else if (currentRoute === 'login') {
      hashHistory.replace('/');
    }
  }

  //<NavBar />
  render() {

    console.log('[CheckLoggedInContainer] Rendering ...: isLoggedIn [', persistedState.isLoggedIn, '], loggedInUser [', persistedState.loggedInUser, ']');
    return (
      <div>
        <Search />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    router: React.PropTypes.object.isRequired
  }
}

export default connect(mapStateToProps)(CheckLoggedInContainer)