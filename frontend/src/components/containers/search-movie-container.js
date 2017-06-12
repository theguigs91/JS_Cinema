/**
 * Created by presci on 08/06/17.
 */

import React from 'react'
import SearchMovie from '../views/search-movie-form'
import * as movieApi from '../../api/movie-api'
import { hashHistory } from 'react-router';

export class SearchMovieBar extends React.Component {

  searchMovie(event) {
    console.log('[SearchMovieContainer] searchMovie');

    event.preventDefault();

    console.log("SEARCH MOVIE");
    movieApi.searchMovies(this.refs.search.value);
    hashHistory.push('/results');
  }

  render(){
    console.log("[SearchMovieContainer] Rendering..");

    return(
      <div>
        <SearchMovie
          searchMovie={this.searchMovie}
        />
      </div>
    )
  }
}

export default SearchMovieBar;