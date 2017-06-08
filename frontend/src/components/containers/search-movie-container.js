/**
 * Created by presci on 08/06/17.
 */

import React from 'react'
import { connect } from 'react-redux'
import SearchMovie from '../views/search-movie-form'
import * as movieApi from '../../api/movie-api'
import ResultList from '../views/resultList'
import ReactDOM from 'react-dom'
import store from '../../store';
import { Provider } from 'react-redux'

export class SearchMovieBar extends React.Component {

  searchMovie(event){
    event.preventDefault();
    console.log("SEARCH MOVIE")
    movieApi.searchMovies(this.refs.search.value)
    ReactDOM.render(<Provider store={store}><ResultList/></Provider>, document.getElementById('results'))
  }

  render(){
    console.log("Rendering..");

    return(
      <div>
        <SearchMovie
          searchMovie={this.searchMovie}
          ref="child"
        />
      </div>
    )
  }
}

export default connect()(SearchMovieBar);