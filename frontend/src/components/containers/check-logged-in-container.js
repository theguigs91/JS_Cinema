import React from 'react';
import { connect } from 'react-redux';
import { setRedirectRoute } from '../../actions/page-actions';
import { hashHistory } from 'react-router';
import { Redirect } from 'react-router-dom';
import { persistedState } from '../../store';

class CheckLoggedInContainer extends React.Component {

  componentDidMount() {

    const { dispatch } = this.props;

    console.log('[CheckLoggedInContainer] componentDidMount persistedState: ', persistedState.isLoggedIn);

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

  render() {

    console.log('[CheckLoggedInContainer] Rendering ...: isLoggedIn [', persistedState.isLoggedIn, '], loggedUser [', persistedState.loggedInUser, ']');

    if (persistedState.isLoggedIn) {
      return (
        <Redirect to="/"/>
      );
    } else {
      return null;
    }
  }
}

function mapStateToProps(state) {
  return {
    router: React.PropTypes.object.isRequired
  }
}

export default connect(mapStateToProps)(CheckLoggedInContainer)