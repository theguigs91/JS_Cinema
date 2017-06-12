/**
 * Created by presci on 12/06/17.
 */
import React from 'react';
import { Link } from 'react-router-dom';

class NavigationBarAdmin extends React.Component {

  render() {

    console.log('[NavigationBarAdmin] Rendering ...');

    return (
      <div>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/movies">Films</Link></li>
          <li><Link to="/schedules">Séances</Link></li>
          <li><Link to="/reservations">Réservations</Link></li>
        </ul>
      </div>
    );
  }
}

export default NavigationBarAdmin;