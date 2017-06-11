import React, { PropTypes } from 'react';

class SeanceInfo extends React.Component {

  render() {

    return (
      <div className="tm-movies-box-1">
        <div className="img-ctn col-sm-4">
          <img src="../img/movie1.jpg" alt="image" className="img-responsive movie-img col-sm-offset-4"/>
        </div>
        <div className="col-sm-8">
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
              <p id="reservation-date margin-bottom-20">{this.props.seance.date}</p>
              <p id="reservation-time margin-bottom-30">{this.props.seance.time}</p>
              <p id="reservation-room">{this.props.seance.room}</p>
            </div>
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