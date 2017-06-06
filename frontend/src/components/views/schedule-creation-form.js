/**
 * Created by kelly on 04/06/17.
 */

import React, { PropTypes } from 'react';
import Checkbox from './checkbox';

const ScheduleCreationForm = React.createClass({

  componentWillMount: function() {
    this.selectedSchedulesCheckboxes = new Set();
  },

  toggleSchedulesCheckbox: function(schedule) {
    if (this.selectedSchedulesCheckboxes.has(schedule))
      this.selectedSchedulesCheckboxes.delete(schedule);
    else
      this.selectedSchedulesCheckboxes.add(schedule);
  },

  /**
   * Get the value of movie (input)
   * We use JSON.parse() because it has been JSON.stringify()
   */
  getMovie: function() {
    if (!this.refs.movie.value)
      return undefined;
    else {
      let movie = JSON.parse(this.refs.movie.value);
      console.log('getMovie: ', this.refs.movie.value, movie);
      return movie;
    }
  },

  /**
   * Get the value of room (input)
   * We use JSON.parse() because it has been JSON.stringify()
   */
  getRoom: function() {
    return JSON.parse(this.refs.room.value);
  },

  getFormInfos: function() {

    console.log('getFormInfos: ', this.selectedSchedulesCheckboxes);

    return {
      movie: this.getMovie(),
      room: this.getRoom(),
      schedules: this.selectedSchedulesCheckboxes,
      date_start: this.refs.date_start.value,
      date_end: this.refs.date_end.value
    };
  },

  /**
   * {
                          this.props.schedules.map(schedule => {
                            return (
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value={schedule} /> {schedule}
                                </label>
                              </div>
                            );
                          })
                        }
   * @returns {XML}
   */

  render: function() {
    return (
      <section className="container tm-home-section-1" id="more">
        <div className="section-margin-top">
          <div className="row tm-schedules-box">
            <form onSubmit={this.props.addSchedule} method="post">
              <div className="tm-schedules-box-info">
                <div className="tm-schedules-box-info-left">
                  <div className="form-group">
                    <label for="movie-title">Nom du film</label>
                    <select className="form-control" ref="movie" onChange={this.props.handleMovieChange} id="movie-title">
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
                    <label for="movie-begin-date" className="col-2 col-form-label">Du</label>
                    <div className="col-10">
                      <input className="form-control" type="date" ref="date_start" id="movie-begin-date" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="movie-end-date" className="col-2 col-form-label">Au</label>
                    <div className="col-10">
                      <input className="form-control" type="date" ref="date_end" id="movie-end-date" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="tm-schedules-box-link">
                <div className="tm-schedules-box-link-left col-sm-10">
                  <div className="schedules">
                    <div className="schedule row">
                      <div className="col-sm-6">
                        <span className="schedules-title row">En VO, Numérique</span>
                        {
                          this.props.schedules.map(schedule => {
                            return (
                              <Checkbox
                                label={schedule}
                                handleCheckboxChange={this.toggleSchedulesCheckbox}
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
                            <select className="form-control" ref="room" id="room">
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
});


ScheduleCreationForm.propTypes = {
  addSchedule: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  rooms: PropTypes.array.isRequired,
  schedules: PropTypes.array.isRequired,
  handleMovieChange: PropTypes.func.isRequired
};

export default ScheduleCreationForm;