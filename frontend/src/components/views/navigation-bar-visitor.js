/**
 * Created by presci on 12/06/17.
 */
import React from 'react'
import { Link } from 'react-router-dom';

class NavigationBarVisitor extends React.Component {

  render() {

    console.log('[NavigationBarVisitor] Rendering ...');

    return (
      <div>
        <ul>
          <li><Link to="/movies">Tous les films</Link></li>
          <li><Link to="/schedules">Seances</Link></li>
          <li><Link to="/myreservations">Mes réservations</Link></li>
        </ul>
      </div>
    );
  }
}

export default NavigationBarVisitor;