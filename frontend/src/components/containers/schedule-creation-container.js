import React from 'react';
import * as scheduleApi from '../../api/schedule-api';
import * as movieApi from '../../api/movie-api';
import * as roomApi from '../../api/room-api';
import ScheduleCreationForm from '../views/schedule-creation-form';
import { connect } from 'react-redux';
import _ from 'lodash';
import { HHMMSSToSeconds, HHMMToSeconds, secondsToHHMM } from '../../helpers/time-helper';
import { dateToYYYYMMDD } from '../../helpers/date-helper';
import Banner from '../views/banner';

const validate = function(schedule) {
  const errors = {};

  if (!schedule.movie)
    errors.movie = 'Veuillez choisir un film';
  if (!schedule.room || schedule.room.trim === '')
    errors.room = 'Veuillez choisir une salle.';
  if (!schedule.schedules || _.isEmpty(schedule.schedules))
    errors.schedules = 'Veuillez sélectionner au moins une horaire.';
  if (!schedule.date_start || schedule.date_start.trim === '')
    errors.date_start = 'Veuillez choisir une date de début.';
  if (!schedule.date_end || schedule.date_end.trim === '')
    errors.date_end = 'Veuillez entrer une date de fin.';

  return errors;
};

class ScheduleCreationContainer extends React.Component {

  componentWillMount() {
    movieApi.getAllMovies();
    roomApi.getRooms();

    // Initialize schedules (computing schedules from first movie)
    if (this.props.movies.length !== 0) {
      this.schedules = ScheduleCreationContainer.getComputedSchedules(this.props.movies[0]);
      this.setState({schedules: this.schedules});
    }
    else
      this.schedules = [];

  }

  static _getComputedSchedules(movie) {
    console.log('getComputedSchedules', movie);
    console.log(movie["time"]);
    let min = (10 - movie.time.split(':')[1] % 10) * 60; // Minutes to add for celling duration (01:34 -> 01:40)
    let duration = HHMMSSToSeconds(movie.time);
    let laps = duration + min + 10 * 60; // 10 minutes between each seance, to clean up the room.
    let schedules = [];
    // Let's assume the cinema is open from 9:30 to 23:00
    let start = HHMMToSeconds('09:30');
    let end = HHMMToSeconds('23:00');

    for (let s = start; s + laps < end; s += laps)
      schedules.push(secondsToHHMM(s));

    console.log("Computed schedules: ", schedules);
    return schedules;
  }


  static getComputedSchedules(movie) {
    console.log('getComputedSchedules', movie);
    console.log(movie["time"]);
    let min = (10 - movie.time.split(':')[1] % 10) * 60; // Minutes to add for celling duration (01:34 -> 01:40)
    let duration = HHMMSSToSeconds(movie.time);
    let laps = duration + min + 10 * 60; // 10 minutes between each seance, to clean up the room.
    let schedules = [];
    // Let's assume the cinema is open from 9:30 to 23:00
    let start = HHMMToSeconds('09:30');
    let end = HHMMToSeconds('23:00');

    for (let s = start; s + laps < end; s += laps)
      schedules.push({start: secondsToHHMM(s), end: secondsToHHMM(s + duration)});

    console.log("Computed schedules: ", schedules);
    return schedules;
  }

  /**
   * Update schedules according to the selected movie.
   */
  onChangeMovie(event) {
    event.preventDefault();

    this.schedules = [];

    // Compute schedules of selected movie
    if (this.props.movies.length !== 0)
      this.schedules = ScheduleCreationContainer.getComputedSchedules(this.getMovie());

    this.setState({movie: event.target.value});
  }

  addSeance(event) {
    event.preventDefault();

    let formInfos = this.getFormInfos();
    console.log('formInfos: ', formInfos);
    let errors = validate(formInfos);
    if (_.isEmpty(errors)) {

      let now = new Date();
      let start = new Date(formInfos.date_start);
      if (start < now)
        start = now;
      let end = new Date(formInfos.date_end);

      // Iterate over days and schedule of each, and add seance.
      while(start <= end) {
        start.setDate(start.getDate() + 1);

        formInfos.schedules.forEach(schedule => {

          let seance = {
            movie_id: formInfos.movie.id,
            room_id: formInfos.room.id,
            places_available: formInfos.room.places_max,
            date: dateToYYYYMMDD(start, '-'),
            time: schedule
          };
          console.log(seance);
          scheduleApi.addSchedule(seance);
        });
      }
    }
    else {
      console.log(errors);
    }
  }

  render() {
    console.log('ScheduleCreationContainer.render');

    return (
      <div>
        <Banner
          titleWhiteBefore=""
          titleYellow="Création"
          titleWhiteAfter="de séances"
          subtitle=""
        />
        <ScheduleCreationForm
          addSchedule={this.addSeance}
          movies={this.props.movies}
          rooms={this.props.rooms}
          schedules={this.schedules}
          onChangeMovie={this.onChangeMovie}
        />
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    schedule: store.scheduleState.schedule,
    movies: store.movieState.movies,
    rooms: store.roomState.rooms
  };
};

export default connect(mapStateToProps)(ScheduleCreationContainer);