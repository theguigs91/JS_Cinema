import React from 'react'
import { connect, Link } from 'react-redux'
import MovieItem from '../views/movieItem'
import * as movieApi from '../../api/movie-api'
import Banner from '../views/banner';
import MiddleButton from '../views/middle-button';

class AdminMoviesContainer extends React.Component {

  componentWillMount() {
    movieApi.getAllMovies();
  }

  getDeleteButton() {
    return (
      <div>
          Supprimer <span className='glyphicon glyphicon-remove' />
      </div>
    );
  }

  render() {
    return (
      <div>
        <Banner
          titleWhiteBefore="Tous les"
          titleYellow="films"
          titleWhiteAfter=""
          subtitle="Gestion des films"
        />
        <section className="container tm-home-section-1" id="more">
          <MiddleButton
            buttonStr="Ajouter un film"
            link="/movies/creation"
          />
          <div>
            {this.props.movies.map(movie =>
              <MovieItem
                key={movie.id}
                data={movie}
                buttonChild={this.getDeleteButton()}
                buttonLink={ "/movies/deletion/" + movie.id }
              />
            )}
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    movies: store.movieState.movies
  }
};

export default connect(mapStateToProps)(AdminMoviesContainer);