import React, { PropTypes } from 'react';

class SeanceInfo extends React.Component {

  render() {

    return (
      <div className="tm-movies-box-1">
        <div className="tm-movies-box-1-info">
          <div className="tm-movies-box-1-info-left">
            <p className="text-uppercase margin-bottom-20 title" ref="movieTitle" id="reservation-movie-title">
              {this.props.seance.movie_name}
            </p>
            <p className="text-uppercase margin-bottom-20 title" ref="movieRealisator" id="reservation-movie-realisator">
              {this.props.seance.movie_realisator}
            </p>
          </div>
          <div className="tm-movies-box-1-info-right">
            <p id="reservation-date margin-bottom-20">Date: {new Date(this.props.seance.date).toDateString()}</p>
            <p id="reservation-time margin-bottom-30">Heure: {this.props.seance.time}</p>
            <p id="reservation-room">Salle: {this.props.seance.room}</p>
            <p id="places">Nombre de places disponibles: {this.props.seance.places_available}</p>
          </div>
        </div>
      </div>
    );
  }
}

SeanceInfo.propTypes = {
  seance: PropTypes.object.isRequired
};

export default SeanceInfo;