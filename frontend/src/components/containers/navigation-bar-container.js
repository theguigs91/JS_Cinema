/**
 * Created by kelly on 12/06/17.
 */

import React from 'react';
import NavigationBarVisitor from '../views/navigation-bar-visitor';
import NavigationBarAdmin from '../views/navigation-bar-admin';
import NavigationBar from '../views/navigation-bar';
import { persistedState } from '../../store';

class NavigationBarContainer extends React.Component {

  render() {

    console.log('[NavigationBarContainer] Rendering ... persistedState: ', persistedState);

    if (!persistedState || !persistedState.loggedInUser)
      return <NavigationBar />;

    switch (persistedState.loggedInUser.role_name) {
      case 'admin':
        return <NavigationBarAdmin />;
      case 'visitor':
        return <NavigationBarVisitor />;
      default:
        return <NavigationBar />;
    }
  }
}

export default NavigationBarContainer;