/**
 * Created by kelly on 07/06/17.
 */

import React, { PropTypes } from 'react';
import SeanceInfo from './seance-info';
import * as CONST from '../../const';

class Reservation extends React.Component {

  componentWillMount() {

    let reservation = this.props.reservation;

    this.buttonClassName = "tm-movies-box-1-link-right glyphicon " + this.props.buttonGlyphicon;
    this.seance = {
      date: reservation.seance_date,
      time: reservation.seance_time,
      movie_name: reservation.movie_name,
      movie_realisator: reservation.movie_realisator,
      numero: reservation.room_numero
    };

    console.log('[Reservation] seance: ', this.seance);
  }

  getReservation() {
    return this.props.reservation;
  }

  render() {

    return (
      <div className="row reservation">

        <div className="col-sm-8 col-xs-12">
          <SeanceInfo seance={this.seance} />
        </div>

        <div className="col-sm-4 col-xs-12">
          <div className="tm-movies-box-1">
            <div className="tm-reservation-box-right">
              <label>Tarif</label>
              <span className="margin-bottom-20"> {CONST.TICKET_PRICE_STRING} €</span><br/>
            </div>
            <div className="tm-movies-box-1-link">
              <button className={this.buttonClassName} onClick={this.props.onClickButtonFunc} ref="button">{this.props.buttonStr}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


/**
 * submitFunc: Function to call when clicking on this button.
 * buttonGlyphicon: name of the glyphicon to display on the "submit" button (from Bootstrap list)
 */
Reservation.propTypes = {
  onClickButtonFunc: PropTypes.func.isRequired,
  buttonStr: PropTypes.string.isRequired,
  reservation: PropTypes.object.isRequired,
  buttonGlyphicon: PropTypes.string.isRequired
};

export default Reservation;