/**
 * Created by kelly on 04/06/17.
 */

import React from 'react';

const ScheduleCreationForm = React.createClassNameName({

  getReservation: function() {
    return {
      user_id: this.refs.user_id.value,
      schedule_id: this.refs.schedule_id.value,
    };
  },

  render: function() {

    return (
      <section className="container tm-home-section-1" id="more">
        <div className="section-margin-top">
          <div className="row confirm-reservation">

            <!-- Recap -->
            <div className="col-sm-8 col-xs-12">
              <div className="tm-movies-box-1">
                <div className="img-ctn col-sm-4">
                  <img src="../img/movie1.jpg" alt="image" className="img-responsive movie-img col-sm-offset-4" />
                </div>
                <div className="col-sm-8">
                  <div className="tm-movies-box-1-info">
                    <div className="tm-movies-box-1-info-left">
                      <p className="text-uppercase margin-bottom-20 title" ref="movieTitle" id="reservation-movie-title">
                        PIRATES DES CARAIBES: LA VENGEANCE DE SALAZAR - VOSTF
                      </p>
                    </div>
                    <div className="tm-movies-box-1-info-right">
                      <p id="reservation-date margin-bottom-20">28 Mai 2017</p>
                      <p id="reservation-time">21:45</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tarif -->
            <div className="col-sm-4 col-xs-12">
              <div className="tm-movies-box-1">
                <form action="#" method="post" className="login-form">
                  <div className="tm-reservation-box-right">
                    <p>Tarif: 4,90 €</p>
                    <div className="tm-form-inner">
                      <div className="form-group row">
                        <label for="number-seats" className="col-2 col-form-label">Nombre de places</label>
                        <div className="col-10">
                          <input className="form-control" type="number" value="1" id="number-seats" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tm-movies-box-1-link">
                    <div className="tm-movies-box-1-link-left col-xs-8">
                      Total: <span id="reservation-total-price">4,90</span> €
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