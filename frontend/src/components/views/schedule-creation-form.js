/**
 * Created by kelly on 04/06/17.
 */

import React from 'react';

export default React.createClass({

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
    return {
      movie: this.getMovie(),
      room: this.getRoom(),
      schedules: ['09:30:00', '11:30:00'],//this.refs.schedules.value,
      date_start: this.refs.date_start.value,
      date_end: this.refs.date_end.value
    };
  },

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
                      <input className="form-control" type="date" value="2017-05-29" ref="date_start" id="movie-begin-date" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="movie-end-date" className="col-2 col-form-label">Au</label>
                    <div className="col-10">
                      <input className="form-control" type="date" value="2017-06-29" ref="date_end" id="movie-end-date" />
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
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="form-check-input" type="checkbox" value={schedule} /> {schedule}
                                </label>
                              </div>
                            );
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