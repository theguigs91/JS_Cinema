/**
 * Created by presci on 08/06/17.
 */

import React from 'react'
import { connect } from 'react-redux'
import MovieItem from '../views/movieItem'
import Banner from '../views/banner';

export class ResultList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    }
  }

  render(){
    console.log("[ResultListContainer] Rendering ...");

    console.log("props movies: ", JSON.stringify(this.props.movies));

    return (
      <div>
        <Banner
          titleWhiteBefore=""
          titleYellow="Résultats"
          titleWhiteAfter="de la recherche"
          subtitle=""
        />
        <section className="container tm-home-section-1" id="more">
          <div>
            {this.props.movies.map(movie =>
              <MovieItem
                key = {movie.id}
                data = {movie}
                buttonChild="Séances"
                buttonLink="/schedules/"
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
    movies: store.movieState.movies,
  }
};

export default connect(mapStateToProps)(ResultList);