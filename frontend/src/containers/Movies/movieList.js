/**
 * Created by presci on 03/06/17.
 */
import React from 'react'
import { connect } from 'react-redux'
import MovieItem from '../components/movieItem'
import flex from '../styles/flex.css'
import { fet } from '../actions'

export class PictureList extends React.Component {
    constructor(props) {
        super.props(props);
    }

    componentWillMount() {
        console.log("Component Will Mount");
        this.props.loadPicturesState()
    }

    render(){
        console.log("Rendering..");
        console.log("props.pictures: ", this.props.pictures);
        return (
            <div>
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
    pictures: state.pictures
});

const mapDispatchToProps = (dispatch) => ({
    loadMovies(){
        dispatch(fetch_DisplayPictures());
        this.render();
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PictureList);