/**
 * Created by presci on 06/06/17.
 */

import React from 'react'
import { connect } from 'react-redux'
import SeanceItem from '../../components/views/seanceItem'
import ScheduleDate from '../views/date-form'
import * as movieApi from '../../api/movie-api'
import * as scheduleApi from '../../api/schedule-api'
import MiddleButton from '../views/middle-button';
import Banner from '../views/banner';
import { persistedState } from '../../store';
import * as DateHelper from '../../helpers/date-helper';
import ReactDOM from 'react-dom';
import _ from 'lodash';
class SeanceList extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          movies: [],
          schedules: []
      }
  }

  componentDidMount() {
    scheduleApi.getAllSchedulesFromDate(DateHelper.dateToYYYYMMDD(new Date(event), '-'));
  }

  selectDate(event) {
    event.preventDefault();
    movieApi.getAllMoviesFromDate(this.dateValue);
    scheduleApi.getAllSchedulesFromDate(this.dateValue);
  }

  componentWillReceiveProps(){
    if (_.isEmpty(this.props.movies)){
      ReactDOM.render(<p>Pas de séances ce jour-là.</p>, document.getElementById('msg-seance-list'));
    }
    else {
      ReactDOM.render(<p></p>, document.getElementById('msg-seance-list'));
    }
  }

  disablePreviousDates() {
    let d = new Date();
    d.setDate(d.getDate() - 1);
    const startSeconds = Date.parse(d);
    return (date) => {
      return Date.parse(date) < startSeconds;
    }
  }

  renderAdmin() {

    return (
      <div>
        <Banner
          titleWhiteBefore="Toutes les"
          titleYellow="séances"
          titleWhiteAfter=""
          subtitle="Ajoutez des séances pour vos clients..."
        />
        <section className="container tm-home-section-1" id="more">
          <MiddleButton
            buttonStr="Ajouter des séances"
            link="/schedules/creation"
          />
          <div className="section-margin-top">
            <ScheduleDate
              selectDate={this.selectDate}
              shouldDisableDateFunction={this.disablePreviousDates()}
            />
          </div>
          <div>
            {this.props.movies.map(movie =>
              <SeanceItem
                key = {movie.id}
                data = {movie}
                schedules = {this.props.schedules.filter(el => el.movie_id == movie.id)}
                link = "/reservation/"
              />
            )}
          </div>
        </section>
      </div>
    )
  }

  renderDefault() {

    return (
      <div>
        <Banner
          titleWhiteBefore="Toutes les"
          titleYellow="séances"
          titleWhiteAfter=""
          subtitle="Réservez votre place de cinéma!"
        />
        <section className="container tm-home-section-1" id="more">
          <ScheduleDate
            selectDate={this.selectDate}
            shouldDisableDateFunction={this.disablePreviousDates()}
          />
          <div>
            {this.props.movies.map(movie =>
              <SeanceItem
                key = {movie.id}
                data = {movie}
                schedules = {this.props.schedules.filter(el => el.movie_id == movie.id)}
                link = "/reservation/"
              />
            )}
          </div>
        </section>
      </div>
    )
  }

  render() {

    let pState = persistedState();

    if (!pState || !pState.loggedInUser)
      return this.renderDefault();
    switch (pState.loggedInUser.role_name) {
      case 'admin':
        return this.renderAdmin();
      default:
        return this.renderDefault();
    }
  }
}

const mapStateToProps = function(store) {
    return {
        schedules: store.scheduleState.schedules,
        movies: store.movieState.movies,
    }
};

export default connect(mapStateToProps)(SeanceList);