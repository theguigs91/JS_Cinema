import React from 'react';
import * as movieApi from '../../api/movie-api';
import * as scheduleApi from '../../api/schedule-api';
import ScheduleCreation from '../views/schedule-creation-form';
import { connect } from 'react-redux';

function validate(movie) {
  const errors = {};
  if (!movie.name || movie.name.trim === '')
    errors.id = 'Veuillez choisir un film';
  if (!movie.director || movie.director.trim === '')
    errors.realisator = 'Veuillez entrer le nom du réalisateur.';
  if (!movie.date || movie.date.trim === '' )
    errors.date = 'Veuillez choisir une date de sortie.';
  if (!movie.duration || movie.duration.trim === '')
    errors.duration = 'Veuillez entrer une durée.';
  if (!movie.type || movie.type.trim === '')
    errors.type = 'Veuillez choisir un ou plusieurs genres.';
  if (!movie.description || movie.description.trim === '')
    errors.description = 'Veuillez entrer une description.';

  return errors;
}

const MovieCreationContainer = React.createClass({

  componentDidMount: function() {
    // TODO: Not implemented yet.
    // let movie = movieApi.getMovie(n)
  },

  addMovie: function(event) {
    event.preventDefault();

    let movie = this.refs.child.getMovie();
    let errors = validate(movie);
    if (errors === {})
      movieApi.addMovie(movie);
    else {
      console.log(errors);
    }
  },

  render: function() {
    return (
      <MovieCreation addMovie={this.addMovie} ref="child"/>
    );
  }

});

const mapStateToProps = function(store) {
  return {
    movie: store.movieState.movie
  };
};

export default connect(mapStateToProps)(MovieCreationContainer);