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
    this.movie = {
      name: reservation.movie_name,
      realisator: reservation.movie_realisator
    };
    this.seance = {
      date: reservation.seance_date,
      time: reservation.seance_time
    };
    this.room = {
      numero: reservation.room_numero
    }
  }

  getReservation() {
    return this.props.reservation;
  }

  render() {

    return (
      <div className="row reservation">

        <div className="col-sm-8 col-xs-12">
          <SeanceInfo movie={this.movie} seance={this.seance} room={this.room} />
        </div>

        <div className="col-sm-4 col-xs-12">
          <div className="tm-movies-box-1">
            <div className="tm-reservation-box-right">
              <label>Tarif</label>
              <span className="margin-bottom-20">{CONST.TICKET_PRICE} €</span><br/>
              <label for="number-seats-taken">Nombre de places</label>
              <span id="number-seats-taken">{this.props.reservation.number_seats}</span>
            </div>
            <div className="tm-movies-box-1-link">
              <div className="tm-movies-box-1-link-left col-xs-8">
                Total: <span id="reservation-total-price">{this.props.reservation.total_price}</span> €
              </div>
              <button className={this.buttonClassName} onClick={this.props.onClickButtonFunc} ref="button" />
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
  reservation: PropTypes.object.isRequired,
  buttonGlyphicon: PropTypes.string.isRequired
};

export default Reservation;