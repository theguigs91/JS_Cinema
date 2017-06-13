/**
 * Created by kelly on 04/06/17.
 */

import React from 'react';
import _ from 'lodash';
import * as movieApi from '../../api/movie-api';
import { hashHistory } from 'react-router';

class MovieCreationForm extends React.Component {


  validate(movie) {
    console.log(movie);

    const errors = {};
    if (!movie.name || movie.name.trim === '')
      errors.name = 'Veuillez entrer un titre.';
    if (!movie.realisator || movie.realisator.trim === '')
      errors.realisator = 'Veuillez entrer le nom du réalisateur.';
    if (!movie.date || movie.date.trim === '')
      errors.date = 'Veuillez choisir une date de sortie.';
    if (!movie.time || movie.time.trim === '')
      errors.time = 'Veuillez entrer une durée.';
    if (!movie.genre || movie.genre.trim === '')
      errors.genre = 'Veuillez choisir un genre.';
    if (!movie.description || movie.description.trim === '')
      errors.description = 'Veuillez entrer une description.';

    return errors;
  }


  addMovie(event) {
    event.preventDefault();
    console.log('MovieCreationContainer.addMovie');

    let movie = {
      name: this.refs.title.value,
      realisator: this.refs.realisator.value,
      date: this.refs.date.value,
      time: this.refs.time.value,
      genre: this.refs.genre.value,
      description: this.refs.synopsis.value,
    };

    let errors = this.validate(movie);
    if (_.isEmpty(errors)) {
      movieApi.addMovie(movie)
        .then(() => {
          hashHistory.replace('/movies');
          return this.forceUpdate();
        });
    }
    else
      console.log("errors: ", errors);
  }

  render() {

    return (
      <section className="container tm-home-section-1" id="more">
        <div className="section-margin-top">
          <div className="row tm-schedules-box">
            <form onSubmit={this.addMovie.bind(this)} className="movie-creation">
              <div className="tm-schedules-box-info">
                <div className="tm-schedules-box-info-left">
                  <div className="form-group">
                    <label for="movie-title">Nom</label>
                    <input type="text" className="form-control" ref="title" id="movie-title" placeholder="Nom du film" />
                  </div>
                  <div className="form-group">
                    <label for="movie-realisator">Réalisateur</label>
                    <input type="text" className="form-control" ref="realisator" id="movie-realisator" placeholder="Nom et prénom du réalisateur" />
                  </div>
                  <div className="form-group">
                    <label for="movie-released-date" className="col-2 col-form-label">Date de sortie</label>
                    <div className="col-10">
                      <input className="form-control" type="date" ref="date" placeholder="2017-07-05" id="movie-released-date" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="movie-type">Genre</label>
                    <select className="form-control" ref="genre" id="movie-type">

                      <option>Programme</option>
                      <option>Action</option>
                      <option>Aventure</option>
                      <option>Biographique</option>
                      <option>Catastrophe</option>
                      <option>Comédie</option>
                      <option>Comédie Dramatique</option>
                      <option>Comédie Musicale</option>
                      <option>Comédie Policière</option>
                      <option>Comédie Romantique</option>
                      <option>Court Métrage</option>
                      <option>Dessin Animé</option>
                      <option>Documentaire</option>
                      <option>Drame</option>
                      <option>Drame Psychologique</option>
                      <option>Epouvante</option>
                      <option>Espionnage</option>
                      <option>Fantastique</option>
                      <option>Film à Sketches</option>
                      <option>Film Musical</option>
                      <option>Guerre</option>
                      <option>Historique</option>
                      <option>Horreur</option>
                      <option>Manga</option>
                      <option>Mélodrame</option>
                      <option>Muet</option>
                      <option>Par Parties</option>
                      <option>Policier</option>
                      <option>Politique</option>
                      <option>Programme</option>
                      <option>Romance</option>
                      <option>Science Fiction</option>
                      <option>Sérial</option>
                      <option>Spectacle</option>
                      <option>Téléfilm</option>
                      <option>Théâtre</option>
                      <option>Thriller</option>
                      <option>Western</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="movie-duration" className="col-2 col-form-label">Durée</label>
                    <div className="col-10">
                      <input className="form-control" ref="time" type="duration" placeholder="02:00:00" id="movie-duration" />
                    </div>
                  </div>
                </div>
                <div className="tm-schedules-box-info-right">
                  <div className="form-group description">
                    <label for="movie-synopsis">Synopsis</label>
                    <textarea className="form-control" ref="synopsis" id="movie-synopsis" rows="22" />
                  </div>
                </div>
              </div>
              <div className="tm-schedules-box-link">
                <button type="submit" name="submit" className="tm-schedules-box-link-right col-sm-2">
                  Enregistrer<br/>
                  <span className="glyphicon glyphicon-ok" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default MovieCreationForm;