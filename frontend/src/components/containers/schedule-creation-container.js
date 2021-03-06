import React from 'react';
import * as scheduleApi from '../../api/schedule-api';
import * as movieApi from '../../api/movie-api';
import * as roomApi from '../../api/room-api';
import ScheduleCreationForm from '../views/schedule-creation-form';
import { connect } from 'react-redux';
import _ from 'lodash';
import { HHMMSSToSeconds, HHMMToSeconds, secondsToHHMM } from '../../helpers/time-helper';
import { dateToYYYYMMDD } from '../../helpers/date-helper';
import * as timeHelper from '../../helpers/time-helper';
import Banner from '../views/banner';

const validate = function(schedule) {
  const errors = {};

  if (!schedule.movie)
    errors.movie = 'Veuillez choisir un film';
  if (!schedule.room || schedule.room.trim === '')
    errors.room = 'Veuillez choisir une salle.';
  if (!schedule.schedules || _.isEmpty(schedule.schedules))
    errors.schedules = 'Veuillez sélectionner au moins une horaire.';
  if (!schedule.date || schedule.date.trim === '')
    errors.date = 'Veuillez choisir une date.';

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

  static getComputedSchedulesBetweenTimes(timeStart, timeEnd, neededGap) {

    let start = HHMMToSeconds(timeStart);
    let end = HHMMToSeconds(timeEnd);

    let schedules = [];

    for (let s = start; s + neededGap < end; s += neededGap) {

      schedules.push(secondsToHHMM(s));
    }

    console.log("Computed schedules between times: ", schedules);
    return schedules;
  }

  static getComputedSchedules(formInfos) {

    console.log("[ScheduleCreationContainer] getComputedSchedules formInfos ", formInfos);

    let schedules = [];

    // TODO replace date_start.. Or Iterate from date_start to date_from.
    return scheduleApi.getSchedulesFromDateRoomId(formInfos.date, formInfos.room.id)
      .then((seancesDateRoom) => {

        // Let's assume the cinema is open from 9:30 to 23:00
        let start = '09:30';
        let end = '23:00';

        let min = (10 - formInfos.movie.time.split(':')[1] % 10) * 60; // Minutes to add for celling duration (01:34 -> 01:40)
        let duration = HHMMSSToSeconds(formInfos.movie.time);
        let neededGap = duration + min + 10 * 60; // 10 minutes between each seance, to clean up the room.

        console.log("[ScheduleCreationContainer] getComputedSchedules seancesDateRoom ", seancesDateRoom);

        if (!_.isEmpty(seancesDateRoom)) {

          let schedules = this.getComputedSchedulesBetweenTimes(start, seancesDateRoom[0].time_start, neededGap);

          // Gap between opening time and first seance.
          console.log("Computed schedules: ", schedules);

          // Gap between seances
          let length = seancesDateRoom.length;
          for (let i = 0; i + 1 < length; i++) {
            let gap = timeHelper.HHMMSSToSeconds(seancesDateRoom[i + 1].time_start) - HHMMSSToSeconds(seancesDateRoom[i].time_end);
            if (gap >= neededGap)
              schedules.push(secondsToHHMM(seancesDateRoom[i].time_end));
          }

          // Gap between last seance and closing time.
          _.merge(schedules, this.getComputedSchedulesBetweenTimes(seancesDateRoom[length - 1].time_end, end, neededGap));

          console.log("Computed schedules: ", schedules);

          return schedules;
        }
        else {
          // Gap between opening time and first seance.
          schedules = this.getComputedSchedulesBetweenTimes(start, end, neededGap);

          console.log("Computed schedules: ", schedules);

          return schedules;
        }
    });
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
      //schedules.push({start: secondsToHHMM(s), end: secondsToHHMM(s + duration)});

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

  onChangeElement(event) {
    event.preventDefault();

    this.schedules = [];

    const elt = event.target.value;

    let formInfos = this.getFormInfos(); // movie, room (room name), date_start, date_end
    if (formInfos.movie && formInfos.room && formInfos.date) {
      // Compute schedules
      ScheduleCreationContainer.getComputedSchedules(formInfos)
        .then(schedules => {
          this.schedules = schedules;
          console.log("ONCHANGELEMENT END Computed schedules: ", schedules);
          this.setState({elt: elt});
        });
    }
   }

  addSeance(event) {
    event.preventDefault();

    let formInfos = this.getFormInfos();
    console.log('formInfos: ', formInfos);
    let errors = validate(formInfos);
    if (_.isEmpty(errors)) {

      let now = new Date();
      let date = new Date(formInfos.date);

      if (date < now)
        return;
      /*
      let start = new Date(formInfos.date_start);
      if (start < now)
        start = now;
      let end = new Date(formInfos.date_end);

      // Iterate over days and schedule of each, and add seance.
      while(start <= end) {
        start.setDate(start.getDate() + 1);*/

      formInfos.schedules.forEach(schedule => {
        console.log("SCHEDULE ", schedule, "FORMINFOS ", formInfos);

        let seance = {
          movie_id: formInfos.movie.id,
          room_id: formInfos.room.id,
          places_available: formInfos.room.places_max,
          date: dateToYYYYMMDD(date, '-'),
          time_start: schedule,
          time_end: (secondsToHHMM(HHMMToSeconds(schedule) + HHMMSSToSeconds(formInfos.movie.time)))
        };
        console.log(seance);
        scheduleApi.addSchedule(seance).then(() =>
          this.forceUpdate()
        );
      });
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
          onChangeElement={this.onChangeElement}
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