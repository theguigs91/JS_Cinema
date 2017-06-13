/**
 * Created by presci on 03/06/17.
 */
import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom';

class MovieItem extends React.Component {

  /*
    <div className="tm-movies-box-1-link">
      <div className="tm-movies-box-1-link-left available">
        Disponible
      </div>
      <Link to={ this.props.buttonLink + } className="tm-movies-box-1-link-right schedule">
        {this.props.buttonChild}
      </Link>
    </div>
   */

  render() {

    console.log("[MovieItem] Rendering ...", this.props);

    return (
      <div className="row tm-movies-box-1">
        <div className="tm-movies-box-1-info">
          <div className="tm-movies-box-1-info-left">
            <p className="text-uppercase margin-bottom-20 title">{this.props.data.name}</p>
            <p className="realisator">{this.props.data.realisator}</p>
            <p className="release-date">{this.props.data.release}</p>
            <p className="duration">{this.props.data.time}</p>
            <p className="type">{this.props.data.genre}</p>
          </div>
          <div className="tm-movies-box-1-info-right">
            <p className="description">
              {this.props.data.description}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

// buttonChild: PropTypes.object.isRequired,

MovieItem.PropTypes = {
  data: PropTypes.object.isRequired,
  buttonLink: PropTypes.string.isRequired
};

export default MovieItem;