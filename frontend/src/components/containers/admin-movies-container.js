import React from 'react'
import { connect } from 'react-redux'
import MovieItem from '../views/movieItem'
import * as movieApi from '../../api/movie-api'

const AdminMoviesContainer = React.createClass({

  componentDidMount: function() {
    movieApi.getAllMovies();
  },

  getEditButton: function() {
    return (
      <div>
        <span className='glyphicon glyphicon-pencil' /> Modifier
      </div>
    );
  },

  render: function(){
    console.log("Rendering..");
    console.log("props movies: ", this.props.movies);

    return (
      <div>
        {this.props.movies.map(movie =>
          <MovieItem
            key={movie.id}
            data={movie}
            buttonChild={this.getEditButton()}
          />
        )}
      </div>
    )
  }
});

const mapStateToProps = function(store) {
  return {
    movies: store.movieState.movies
  }
};

export default connect(mapStateToProps)(AdminMoviesContainer);