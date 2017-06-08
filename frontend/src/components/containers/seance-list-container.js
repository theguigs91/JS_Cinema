/**
 * Created by presci on 06/06/17.
 */

import React from 'react'
import { connect } from 'react-redux'
import SeanceItem from '../../components/views/seanceItem'
import ScheduleDate from '../views/schedule-date-form'
import * as movieApi from '../../api/movie-api'
import * as scheduleApi from '../../api/schedule-api'

export class SeanceList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            schedules: []
        }
    }

    selectDate(event){
      event.preventDefault();
      console.log("SELECT DATE")
      movieApi.getAllMoviesFromDate(this.refs.date.value)
      scheduleApi.getAllSchedulesFromDate(this.refs.date.value);
    }

    render(){
        console.log("Rendering..");

        console.log("props movies: ", JSON.stringify(this.props.movies));
        console.log("props schedules: ", (this.props.schedules));

        return (
          <div>
          <ScheduleDate
            selectDate={this.selectDate}
            ref="child"
          />
            <div>
                {this.props.movies.map(movie =>
                  <SeanceItem
                    key = {movie.id}
                    data = {movie}
                    schedules = {this.props.schedules.filter(el => el.movie_id == movie.id)}
                  />
                )}
            </div>
          </div>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        schedules: store.scheduleState.schedules,
        movies: store.movieState.movies,
    }
};

export default connect(mapStateToProps)(SeanceList);