/**
 * Created by kelly on 04/06/17.
 */

import React from 'react';
import * as movieApi from '../../api/movie-api';
import MovieCreation from '../views/movie-creation-form';
import { connect } from 'react-redux';
import _ from 'lodash';

function validate(movie) {
  console.log(movie);

  const errors = {};
  if (!movie.name || movie.name.trim === '')
    errors.name = 'Veuillez entrer un titre.';
  if (!movie.realisator || movie.realisator.trim === '')
    errors.realisator = 'Veuillez entrer le nom du réalisateur.';
  if (!movie.date || movie.date.trim === '' )
    errors.date = 'Veuillez choisir une date de sortie.';
  if (!movie.time || movie.time.trim === '')
    errors.time = 'Veuillez entrer une durée.';
  if (!movie.genre || movie.genre.trim === '')
    errors.genre = 'Veuillez choisir un genre.';
  if (!movie.description || movie.description.trim === '')
    errors.description = 'Veuillez entrer une description.';

  return errors;
}

const MovieCreationContainer = React.createClass({

  addMovie: function(event) {
    event.preventDefault();
    console.log('MovieCreationContainer.addMovie');

    let movie = this.refs.child.getMovie();
    let errors = validate(movie);
    if (_.isEmpty(errors)) {
      movieApi.addMovie(movie);
    }
    else {
      console.log("errors: ", errors);
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