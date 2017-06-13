import React, { PropTypes } from 'react';
import { dateToYYYYMMDD } from '../../helpers/date-helper';
import { HHMMSSToHHMM } from '../../helpers/time-helper';

class SeanceInfo extends React.Component {

  render() {

    console.log('[SeanceInfo] Rendering ...', this.props.seance);

    return (
      <div className="tm-movies-box-1">
        <div className="tm-movies-box-1-info">
          <div className="tm-movies-box-1-info-left">
            <p className="text-uppercase margin-bottom-20 title" ref="movieTitle" id="reservation-movie-title">
              {this.props.seance.movie_name}
            </p>
            <p className="margin-bottom-20 title" ref="movieRealisator" id="reservation-movie-realisator">
              Réalisateur: {this.props.seance.movie_realisator}
            </p>
          </div>
          <div className="tm-movies-box-1-info-right">
            <p id="reservation-date margin-bottom-20">Date de la séance: {dateToYYYYMMDD(new Date(this.props.seance.date), '-')}</p>
            <p id="reservation-time margin-bottom-30">Horaire: {HHMMSSToHHMM(this.props.seance.time_start) + '-' + HHMMSSToHHMM(this.props.seance.time_end)}</p>
            <p id="reservation-room">Salle {this.props.seance.room}</p>
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