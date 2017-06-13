/**
 * Created by presci on 07/06/17.
 */

import React, { PropTypes } from 'react';
import DatePicker from 'material-ui/DatePicker';
import * as DateHelper from '../../helpers/date-helper';

class DateForm extends React.Component {

  _handleDateChange(x, event) {
    this.dateValue = DateHelper.dateToYYYYMMDD(new Date(event), '-');
  }

  render() {

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
                      <div>
                        <DatePicker
                          ref="date"
                          defaultDate={new Date()}
                          hintText="Choisissez une date"
                          mode="landscape"
                          shouldDisableDate={this.props.shouldDisableDateFunction}
                          onChange={(x, event) => this._handleDateChange(x, event)}
                        />
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
}

export default DateForm;