/**
 * Created by presci on 03/06/17.
 */
import React from 'react'
import { connect } from 'react-redux'
import MovieItem from '../../components/movieItem'
import { fetch_DisplayMovies } from '../../actions/movie-actions'

export class MovieList extends React.Component {

    componentWillMount() {
        console.log("Component Will Mount");
        this.props.loadMovies()
    }

    render(){
        console.log("Rendering..");
        console.log("props.movies: ", this.props.movies);
        return (
            <div>
                <p>OK</p>
                {this.props.movies.map(movie =>
                    <MovieItem
                        key={movie.id}
                        data = {movie}
                    />
                )}
            </div>
        )
    }
}

/*
 )}*/

const mapStateToProps = (state, ownProps) => ({
    movies: state.movies
});

const mapDispatchToProps = (dispatch) => ({
    loadMovies(){
        dispatch(fetch_DisplayMovies());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);