/**
 * Created by presci on 07/06/17.
 */

import React from 'react';

export default React.createClass({

  getDate: function() {
    return this.refs.date.value;
  },

  render: function() {

    return (
      <section className="container tm-home-section-1" id="more">
        <div className="row col-lg-offset-4 col-md-offset-4 col-sm-offset-4">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="tm-home-box-1">
              <ul className="tm-home-title tm-yellow-bg">Choisissez une date</ul>
              <div className="tm-white-bg">
                <div className="date-picker">
                  <form onSubmit={this.props.selectDate.bind(this)} className="date-picker-form">
                    <div className="tm-form-inner">
                      <div className="form-group">
                        <div className='input-group date' id='schedules-date-picker'>
                          <input type='text' ref='date' id ='date' className="form-control" placeholder="Choisissez une date" />
                          <span className="input-group-addon">
						                        <span className="fa fa-calendar"></span>
						                    </span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group tm-yellow-gradient-bg text-center">
                      <button type="submit" name="submit" className="tm-yellow-btn">Voir les séances</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
});