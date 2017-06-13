/**
 * Created by kelly on 04/06/17.
 */

import React from 'react';
import MovieCreationForm from '../views/movie-creation-form';
import { connect } from 'react-redux';
import Banner from '../views/banner';

class MovieCreationContainer extends React.Component {

  render() {
    return (
      <div>
        <Banner
          titleWhiteBefore=""
          titleYellow="Création"
          titleWhiteAfter="de film"
          subtitle=""
        />

        <MovieCreationForm />
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    movie: store.movieState.movie
  };
};

export default connect(mapStateToProps)(MovieCreationContainer);