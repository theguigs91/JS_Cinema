/**
 * Created by kelly on 06/06/17.
 */
import React, { PropTypes } from 'react';

const ReservationCreationForm = React.createClass({

  getReservation: function() {
    return {
      //user_id: this.refs.user_id.value,
      //schedule_id: this.refs.schedule_id.value,
      number_seats: this.refs.number_seats.value
    };
  },

  getNumberSeats: function() {
    return this.refs.number_seats.value;
  },

  render: function() {

    return (
      <section className="container tm-home-section-1" id="more">
        <div className="section-margin-top">
          <div className="row confirm-reservation">

            <div className="col-sm-8 col-xs-12">
              <div className="tm-movies-box-1">
                <div className="img-ctn col-sm-4">
                  <img src="../img/movie1.jpg" alt="image" className="img-responsive movie-img col-sm-offset-4" />
                </div>
                <div className="col-sm-8">
                  <div className="tm-movies-box-1-info">
                    <div className="tm-movies-box-1-info-left">
                      <p className="text-uppercase margin-bottom-20 title" ref="movieTitle" id="reservation-movie-title">
                        {this.props.movie.name}
                      </p>
                    </div>
                    <div className="tm-movies-box-1-info-right">
                      <p id="reservation-date margin-bottom-20">{this.props.seance.date}</p>
                      <p id="reservation-time">{this.props.seance.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-xs-12">
              <div className="tm-movies-box-1">
                <form onSubmit={this.props.addReservation} method="post" className="login-form">
                  <div className="tm-reservation-box-right">
                    <p>Tarif: 4,90 €</p>
                    <div className="tm-form-inner">
                      <div className="form-group row">
                        <label for="number-seats" className="col-2 col-form-label">Nombre de places</label>
                        <div className="col-10">
                          <input className="form-control" type="number" ref="number_seats" onChange={this.props.updateTotalPrice} min="0" max={this.props.seance.places_available} id="number-seats" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tm-movies-box-1-link">
                    <div className="tm-movies-box-1-link-left col-xs-8">
                      Total: <span id="reservation-total-price">{this.props.totalPrice}</span> €
                    </div>
                    <button className="tm-movies-box-1-link-right glyphicon glyphicon-ok" type="submit" name="submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
});


ReservationCreationForm.propTypes = {
  addReservation: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
  seance: PropTypes.object.isRequired,
  updateTotalPrice: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired
};

export default ReservationCreationForm;