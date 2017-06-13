/**
 * Created by kelly on 12/06/17.
 */

import React from 'react'
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {

  render() {

    console.log('[NavigationBar] Rendering ...');

    return (
      <div>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/movies">Tous les films</Link></li>
          <li><Link to="/schedules">Seances</Link></li>
          <li><Link to="/about">A propos</Link></li>
        </ul>
      </div>
    );
  }
}

export default NavigationBar;