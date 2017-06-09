import React, { PropTypes } from 'react';
import * as movieApi from '../../api/movie-api';
import MovieEditionForm from '../views/movie-edition-form';
import { connect } from 'react-redux';
import _ from 'lodash';

function validate(movie) {
  console.log(movie);

  const errors = {};
  if (!movie.id || movie.id.trim === '')
    errors.id = 'Film invalide.';
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

class MovieEditionContainer extends React.Component {

  editMovie() {
    let movie = this.getMovie();
    console.log('MovieEditionContainer.editMovie', movie);

    let errors = validate(movie);
    if (_.isEmpty(errors)) {
      movieApi.updateMovie(movie);
    }
    else
      console.log("errors: ", errors);
  }

  deleteMovie() {
    let movie = this.getMovie();
    console.log('MovieEditionContainer.deleteMovie', movie);

    movieApi.deleteMovie(movie.id).then(() => {
      console.log('this.props.router.push');
      this.props.router.push('/movies/admin');
    });
  }

  componentWillMount() {

    let movieId = this.props.match.params.movieId;
    console.log("[MovieEditionContainer] componentDidMount ", movieId);
    movieApi.getMovieById(movieId);

    // fire action to update redux project store
    this.setState({id: this.props.match.params.movieId});
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("[MovieEditionContainer] componentDidUpdate prevProps", prevProps);
    console.log("[MovieEditionContainer] componentDidUpdate prevState", prevState);

    /**
     * this is the initial render without a previous prop change
     */
    if (prevProps === undefined) {
      console.log("[MovieEditionContainer] prevProps == undefined");
      return false;
    }

    if (this.state.id !== this.props.match.params.movieId) {
      let movieId = this.props.match.params.movieId;
      console.log("[MovieEditionContainer] !=== componentDidUpdate ", movieId);
      movieApi.getMovieById(movieId);
      this.setState({id: this.props.match.params.movieId});
    }
  }

  render() {
    console.log("[MovieEditionContainer] Rendering ...", this.props);
    return (
      <MovieEditionForm
        deleteMovie={this.deleteMovie}
        editMovie={this.editMovie}
        movie={this.props.movie}
        ref="child"/>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    movie: store.movieState.movie
  };
};

export default connect(mapStateToProps)(MovieEditionContainer);