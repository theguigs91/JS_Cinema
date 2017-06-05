/**
 * Created by presci on 03/06/17.
 */
import React from 'react'
import { connect } from 'react-redux'
import MovieItem from '../../components/movieItem'
import * as movieApi from '../../api/movie-api'

export class MovieList extends React.Component {

    componentDidMount() {
        console.log("Component Did Mount");
        movieApi.getAllMovies();
    }

    render(){
        console.log("Rendering..");
        console.log("props movies: ", this.props.movies);

        this.props.movies.map(el => {
            console.log("id: ", el.name)
        });

        return (
            <div>
                {this.props.movies.map(movie =>
                    <MovieItem
                        key={movie.id}
                        data = {movie}
                    />
                )}
                <p> --------------------- </p>
            </div>
        )
    }
}

/*
 )}*/

const mapStateToProps = function(store) {
    return {
        movies: store.movieReducer.movies
    }
};

export default connect(mapStateToProps)(MovieList);