/**
 * Created by presci on 12/06/17.
 */
import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom';

class NavigationBarVisitor extends React.Component {

  render() {

    console.log('[NavigationBar] Rendering ...');

    return (
      <div>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/movies">Tous les films</Link></li>
          <li><Link to="/schedules">Seances</Link></li>
          <li><Link to="/">A propos</Link></li>
        </ul>
      </div>
    );
  }
}

export default NavigationBarVisitor;