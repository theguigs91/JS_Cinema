/**
 * Created by kelly on 04/06/17.
 */

import React, { PropTypes } from 'react';
import Checkbox from './checkbox';
import _ from 'lodash';
import { connect } from 'react-redux';

class ScheduleCreationForm extends React.Component {

  componentWillMount() {
    console.log('[ScheduleCreationForm] componentWillMount');

    this.selectedSchedulesCheckboxes = new Set();
    this.schedules = _.isEmpty(this.props.schedules) ? [] : this.props.schedules;
  }

  toggleSchedulesCheckbox(schedule) {
    if (this.selectedSchedulesCheckboxes.has(schedule))
      this.selectedSchedulesCheckboxes.delete(schedule);
    else
      this.selectedSchedulesCheckboxes.add(schedule);
  }

  /**
   * Get the value of movie (input)
   * We use JSON.parse() because it has been JSON.stringify()
   */
  getMovie() {
    if (!this.refs.movie.value)
      return undefined;
    else {
      let movie = JSON.parse(this.refs.movie.value);
      console.log('getMovie: ', this.refs.movie.value, movie);
      return movie;
    }
  }

  /**
   * Get the value of room (input)
   * We use JSON.parse() because it has been JSON.stringify()
   */
  getRoom() {
    return JSON.parse(this.refs.room.value);
  }

  getFormInfos() {

    console.log('getFormInfos: ', this.selectedSchedulesCheckboxes);

    return {
      movie: this.getMovie(),
      room: this.getRoom(),
      schedules: this.selectedSchedulesCheckboxes,
      date: this.refs.date.value,
    };
  }

  render() {

    return (
      <section className="container tm-home-section-1" id="more">
        <div className="section-margin-top">
          <div className="row tm-schedules-box">
            <form onSubmit={this.props.addSchedule.bind(this)} method="post">
              <div className="tm-schedules-box-info">
                <div className="tm-schedules-box-info-left">
                  <div className="form-group">
                    <label for="movie-title">Nom du film</label>
                    <select className="form-control" ref="movie" onChange={this.props.onChangeElement.bind(this)} id="movie-title">
                      {
                        this.props.movies.map(movie => {
                          return (
                            <option value={JSON.stringify(movie)}>{movie.name}</option>
                          );
                        })
                      }
                    </select>
                  </div>
                </div>
                <div className="tm-schedules-box-info-right">
                  <div className="form-group">
                    <label for="movie-begin-date" className="col-2 col-form-label">Date</label>
                    <div className="col-10">
                      <input className="form-control" type="date" ref="date" id="movie-begin-date" onChange={this.props.onChangeElement.bind(this)} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="tm-schedules-box-link">
                <div className="tm-schedules-box-link-left col-sm-10" style={this.style}>
                  <div className="schedules">
                    <div className="schedule row">
                      <div className="col-sm-6">
                        <span className="schedules-title row">En VO, Numérique</span>
                        {
                          this.schedules.map(schedule => {

                            return (
                              <Checkbox
                                label={schedule}
                                handleCheckboxChange={this.toggleSchedulesCheckbox.bind(this)}
                                key={schedule}
                              />
                            )
                          })
                        }
                      </div>
                      <div className="col-sm-6">
                        <div className="room">
                          <div className="form-group">
                            <label for="room" className="col-2 col-form-label">Salle</label>
                            <select className="form-control" ref="room" id="room" onChange={this.props.onChangeElement.bind(this)}>
                              {
                                this.props.rooms.map(room => {
                                  return (
                                    <option value={JSON.stringify(room)}>{room.numero}</option>
                                  );
                                })
                              }
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" name="submit" className="tm-schedules-box-link-right col-sm-2">
                Enregistrer<br/>
                <span className="glyphicon glyphicon-ok" />
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}


ScheduleCreationForm.propTypes = {
  addSchedule: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  rooms: PropTypes.array.isRequired,
  schedules: PropTypes.array.isRequired,
  onChangeElement: PropTypes.func.isRequired
};

export default ScheduleCreationForm;