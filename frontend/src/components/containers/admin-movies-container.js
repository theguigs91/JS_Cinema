import React from 'react'
import { connect, Link } from 'react-redux'
import MovieItem from '../views/movieItem'
import * as movieApi from '../../api/movie-api'

class AdminMoviesContainer extends React.Component {

  static componentDidMount() {
    movieApi.getAllMovies();
  }

  static getEditButton() {
    return (
      <div>
          Modifier <span className='glyphicon glyphicon-pencil' />
      </div>
    );
  }

  render(){
    console.log("Rendering..");
    console.log("props movies: ", this.props.movies);

    return (
      <div>
        {this.props.movies.map(movie =>
          <MovieItem
            key={movie.id}
            data={movie}
            buttonChild={this.getEditButton()}
            buttonLink={ "/movies/edition/" + movie.id }
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    movies: store.movieState.movies
  }
};

export default connect(mapStateToProps)(AdminMoviesContainer);