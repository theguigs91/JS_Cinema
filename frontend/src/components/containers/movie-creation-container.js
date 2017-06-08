/**
 * Created by kelly on 04/06/17.
 */

import React from 'react';
import * as movieApi from '../../api/movie-api';
import MovieCreationForm from '../views/movie-creation-form';
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

class MovieCreationContainer extends React.Component {

  addMovie(event) {
    event.preventDefault();
    console.log('MovieCreationContainer.addMovie');

    let movie = {
      name: this.refs.title.value,
      realisator: this.refs.realisator.value,
      date: this.refs.date.value,
      time: this.refs.time.value,
      genre: this.refs.genre.value,
      description: this.refs.synopsis.value,
    };

    let errors = validate(movie);
    if (_.isEmpty(errors))
      movieApi.addMovie(movie);
    else
      console.log("errors: ", errors);
  }

  render() {
    return (
      <MovieCreationForm addMovie={this.addMovie} />
    );
  }
}

const mapStateToProps = function(store) {
  return {
    movie: store.movieState.movie
  };
};

export default connect(mapStateToProps)(MovieCreationContainer);