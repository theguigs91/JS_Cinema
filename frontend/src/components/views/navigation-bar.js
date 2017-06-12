/**
 * Created by presci on 12/06/17.
 */
import React, { PropTypes } from 'react'
import ReactRouter from 'react-router';
import { Link } from 'react-router';


//import Bootstrap from '../../misc/css/bootstrap.min.css'
//import '../../misc/css/templatemo-style.css'
//import '../../misc/css/bootstrap.min.css'

class NavigationBar extends React.Component {

  render() {

    console.log("Render NAVIGATION BAR")
    return (
      <div>
        <ul>
          <li><Link to="/">Accueil</Link></li>
        </ul>
      </div>
        )
  }
}

export default NavigationBar;