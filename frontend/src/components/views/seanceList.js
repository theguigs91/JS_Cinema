/**
 * Created by presci on 06/06/17.
 */
/**
 * Created by presci on 03/06/17.
 */
import React from 'react'
import { connect } from 'react-redux'
import SeanceItem from '../../components/seanceItem'
import HourButton from '../../components/hourButton'
import * as scheduleApi from '../../api/schedule-api'
import * as movieApi from '../../api/movie-api'
import _ from 'lodash';

export class SeanceList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            schedules: []
        }

    }

    componentDidMount() {
        console.log("Component Did Mount");
        movieApi.getAllMoviesFromDate("2017-05-16");
        scheduleApi.getAllSchedulesFromDate("2017-05-16")
    }

    render(){
        console.log("Rendering..");

        console.log("props movies: ", JSON.stringify(this.props.movies));
        console.log("props schedules: ", (this.props.schedules.filter(el => el.movie_id == 3)));

        return (
            <div>
                {this.props.movies.map(movie =>
                    <SeanceItem
                        key={movie.id}
                        data = {movie}
                        schedules = {this.props.schedules.filter(el=> el.movie_id == movie.id)}
                    />

                )}
            </div>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        schedules: store.scheduleReducer.schedules,
        movies: store.movieReducer.movies,
    }
};

export default connect(mapStateToProps)(SeanceList);