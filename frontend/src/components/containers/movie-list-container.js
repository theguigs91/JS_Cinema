/**
 * Created by presci on 03/06/17.
 */
import React from 'react';
import { connect } from 'react-redux';
import MovieItem from '../views/movieItem';
import * as movieApi from '../../api/movie-api';
import Banner from '../views/banner';
import MiddleButton from '../views/middle-button';

import { persistedState } from '../../store';

export class MovieList extends React.Component {

  componentDidMount() {
    console.log("Component Did Mount");
    movieApi.getAllMovies();
  }

  getDeleteButton() {
    return (
      <div>
        Supprimer <span className='glyphicon glyphicon-remove' />
      </div>
    );
  }

  renderAdmin() {
    console.log("[ADMIN MOVIES LIST] Rendering..")
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

  renderDefault() {
    console.log("[MOVIES LIST] Rendering..");
    console.log("props movies: ", this.props.movies);

    return (
      <div>
        <Banner
          titleWhiteBefore="Tous les"
          titleYellow="films"
          titleWhiteAfter=""
          subtitle=""
        />
        <section className="container tm-home-section-1" id="more">
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

  render() {
    let pState = persistedState();
    if (!pState || !pState.loggedInUser)
      return this.renderDefault();

    console.log("role: ", pState.loggedInUser.role_name);

    switch (pState.loggedInUser.role_name) {
      case 'admin':
        return this.renderAdmin();
      default:
        return this.renderDefault();
    }
  }
}

const mapStateToProps = function(store) {
  return {
    movies: store.movieState.movies
  }
};

export default connect(mapStateToProps)(MovieList);