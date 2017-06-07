import React, { PropTypes } from 'react';

const MovieInfo = React.createClass({

  render: function () {

    return (
      <div className="col-sm-8 col-xs-12">
        <div className="tm-movies-box-1">
          <div className="img-ctn col-sm-4">
            <img src="../img/movie1.jpg" alt="image" className="img-responsive movie-img col-sm-offset-4"/>
          </div>
          <div className="col-sm-8">
            <div className="tm-movies-box-1-info">
              <div className="tm-movies-box-1-info-left">
                <p className="text-uppercase margin-bottom-20 title" ref="movieTitle" id="reservation-movie-title">
                  {this.props.movie.name}
                </p>
              </div>
              <div className="tm-movies-box-1-info-right">
                <p id="reservation-date margin-bottom-20">{this.props.seance.date}</p>
                <p id="reservation-time">{this.props.seance.time}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
  seance: PropTypes.object.isRequired,
};

export default MovieInfo;