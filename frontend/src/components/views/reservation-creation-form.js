/**
 * Created by kelly on 06/06/17.
 */
import React, { PropTypes } from 'react';
import SeanceInfo from './seance-info';
import * as CONST from '../../const';
import * as reservationApi from '../../api/reservation-api';
import * as scheduleApi from '../../api/schedule-api';
import _ from 'lodash';
import { persistedState } from '../../store';
import { hashHistory } from 'react-router';
import ReactDOM from 'react-dom';

class ReservationCreationForm extends React.Component {

  getReservation() {
    return {
      number_seats: this.refs.number_seats.value
    };
  }

  getNumberSeats() {
    return this.refs.number_seats.value;
  }

  updateTotalPrice(event) {
    event.preventDefault();

    console.log('updateTotalPrice');
    let numberSeats = this.getNumberSeats();
    if (numberSeats >= 0)
      this.totalPrice = (numberSeats * CONST.TICKET_PRICE).toFixed(2);
    console.log('totalPrice: ', this.totalPrice);
    this.setState({total_price: this.totalPrice});
  }

  validate(reservation) {
    console.log(reservation);

    const errors = {};
    //if (!reservation.user)
    //  errors.user = 'Veuillez vous connecter.';
    //if (!reservation.seance_id || reservation.seance_id.trim === '')
    //  errors.seance_id = 'Séance inconnue.';
    //if (!reservation.price || reservation.price.trim === '' )
    //  errors.total_price = 'Erreur de prix';
    if (!reservation.number_seats || reservation.number_seats.trim === '')
      errors.number_seats = 'Veuillez choisir le nombre de places.';
    return errors;
  }

  checkBooking(event){
    event.preventDefault();

    scheduleApi.canBook(this.props.seance.id)
      .then(response => {
        if (response == true){
          console.log("CAN BOOK");
          this.addReservation();
        }
        else {
          console.log("CANNOT BOOK")
          ReactDOM.render(<p>Vous ne pouvez pas reserver cette seance, la date est depassee.</p>,
                          document.getElementById('msg-reservation-creation'))
        }
      })
  }

  addReservation() {

    console.log('ReservationCreationForm.addReservation this.props: ', this.props);

    let pState = persistedState();
    if (!pState.isLoggedIn) {
      hashHistory.replace('/login');
      return this.forceUpdate();
    }
    else {
      let reservation = this.getReservation();
      let errors = this.validate(reservation);
      if (_.isEmpty(errors)) {

        for (let i = 0; i < reservation.number_seats; i++) {
          let reservation = {
            user_id: pState.loggedInUser.id,
            seance_id: this.props.seance.id
          };
          console.log(reservation);
          reservationApi.addReservation(reservation);
          scheduleApi.decrementSeancePlaces(this.props.seance.id);
         // hashHistory.replace('/myreservations');
          ReactDOM.render(<p>Place(s) réservée(s) !</p>,
            document.getElementById('msg-reservation-creation'))
        }
      }
      else
        console.log("errors: ", errors);
    }
  }

  render() {

    return (
      <section className="container tm-home-section-1" id="more">
        <div className="section-margin-top">
          <div className="row confirm-reservation">

            <div className="col-sm-8 col-xs-12">
              <SeanceInfo
                seance={this.props.seance}
                movie={this.props.movie}
                room={this.props.room}
              />
            </div>

            <div className="col-sm-4 col-xs-12">
              <div className="tm-movies-box-1">
                <form onSubmit={this.checkBooking.bind(this)} method="post" className="login-form">
                  <div className="tm-reservation-box-right">
                    <p>Tarif: 4,90 €</p>
                    <div className="tm-form-inner">
                      <div className="form-group row">
                        <label for="number-seats" className="col-2 col-form-label">Nombre de places</label>
                        <div className="col-10">
                          <input className="form-control" type="number" ref="number_seats" onChange={this.updateTotalPrice.bind(this)} min="0" max={this.props.seance.places_available} id="number-seats" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tm-movies-box-1-link">
                    <div className="tm-movies-box-1-link-left col-xs-8">
                      Total: <span id="reservation-total-price">{this.totalPrice}</span> €
                    </div>
                    <button className="tm-movies-box-1-link-right glyphicon glyphicon-ok" type="submit" name="submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div id="msg-reservation-creation"></div>
      </section>
    );
  }
}


ReservationCreationForm.propTypes = {
  seance: PropTypes.object.isRequired
};

/*ReservationCreationForm.propTypes = {
  movie: PropTypes.object.isRequired,
  seance: PropTypes.object.isRequired,
  room: PropTypes.object.isRequired,
};*/
//  addReservation: PropTypes.func.isRequired,
//  updateTotalPrice: PropTypes.func.isRequired,
//totalPrice: PropTypes.string.isRequired


export default ReservationCreationForm;