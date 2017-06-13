import React from 'react';
import { connect } from 'react-redux';
import { setRedirectRoute } from '../../actions/page-actions';
import { hashHistory } from 'react-router';
import { persistedState } from '../../store';

class CheckLoggedInContainer extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;

    let pState = persistedState();
    console.log('[CheckLoggedInContainer] componentDidMount persistedState: ', pState);

    let currentRoute = this.props.location.pathname;

    if (!pState.isLoggedIn) {
      // The current route is set for future redirection (after login)
      if (currentRoute === 'login')
        dispatch(setRedirectRoute('/'));
      else
        dispatch(setRedirectRoute(currentRoute));

      hashHistory.replace('/login');
      return this.forceUpdate();
    }
    else if (currentRoute === 'login') {
      hashHistory.replace('/');
    }
  }

  render() {
    let pState = persistedState();
    console.log('[CheckLoggedInContainer] Rendering ...: isLoggedIn [', pState.isLoggedIn, '], loggedInUser [', pState.loggedInUser, ']');
    return null;
  }
}

function mapStateToProps() {
  return {
    router: React.PropTypes.object.isRequired
  }
}

export default connect(mapStateToProps)(CheckLoggedInContainer)