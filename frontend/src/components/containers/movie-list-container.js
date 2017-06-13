/**
 * Created by presci on 03/06/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import MovieItem from '../views/movieItem';
import * as movieApi from '../../api/movie-api';
import MiddleButton from '../views/middle-button';

export class MovieList extends React.Component {

  componentDidMount() {
    console.log("Component Did Mount");
    movieApi.getAllMovies();
  }

  render() {
    console.log("Rendering..");
    console.log("props movies: ", this.props.movies);

    return (
      <div>
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
                buttonChild="Séances"
                buttonLink="/schedules"
              />
            )}
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    movies: store.movieState.movies
  }
};

export default connect(mapStateToProps)(MovieList);