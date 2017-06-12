/**
 * Created by presci on 12/06/17.
 */
/**
 * Created by presci on 12/06/17.
 */
import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom';

class NavigationBar extends React.Component {

  render() {

    console.log('[NavigationBar] Rendering ...');

    return (
      <div>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/movies">Films</Link></li>
          <li><Link to="/schedules">Séances</Link></li>
          <li><Link to="/">Réservations</Link></li>
        </ul>
      </div>
    );
  }
}

export default NavigationBar;