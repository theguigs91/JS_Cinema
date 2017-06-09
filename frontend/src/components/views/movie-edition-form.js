import React, { PropTypes } from 'react';
import * as DateHelper from '../../helpers/date-helper';

class MovieEditionForm extends React.Component {

  getMovie() {
    return {
      id: this.props.movie.id,
      name: this.refs.title.value,
      realisator: this.refs.realisator.value,
      date: this.refs.date.value,
      time: this.refs.time.value,
      genre: this.refs.genre.value,
      description: this.refs.description.value,
    }
  }

  /*
    <div className="form-group">
      <label for="movie-image">Affiche</label>
    </div>
    <input type="file" className="form-control-file" ref="image" id="movie-image" value={this.props.movie.name} />
  */

  render() {
    if (this.props.movie) {
      return (
        <section className="container tm-home-section-1" id="more">
          <div className="section-margin-top">
            <div className="row tm-schedules-box">
              <div className="col-lg-3 col-mg-3 col-sm-3">
                <img src="../img/movie1.jpg" alt="image" className="img-responsive movie-img"/>
              </div>
              <form onSubmit={this.props.editMovie.bind(this)} className="movie-edition col-lg-9 col-mg-9 col-sm-9">
                <div className="tm-schedules-box-info">
                  <div className="tm-schedules-box-info-left">
                    <div className="form-group">
                      <label for="movie-title">Nom</label>
                      <input type="text" className="form-control" ref="title" id="movie-title"
                             value={this.props.movie.name}/>
                    </div>
                    <div className="form-group">
                      <label for="movie-realisator">Réalisateur</label>
                      <input type="text" className="form-control" ref="realisator" id="movie-realisator"
                             value={this.props.movie.realisator}/>
                    </div>
                    <div className="form-group">
                      <label for="movie-released-date" className="col-2 col-form-label">Date de sortie</label>
                      <div className="col-10">
                        <input className="form-control" type="date" ref="date"
                               value={DateHelper.getYYYYMMDD(this.props.movie.date)} id="movie-released-date"/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="movie-type">Genre</label>
                      <select className="form-control" ref="genre" id="movie-type">
                        <option selected>{this.props.movie.genre}</option>
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
                        <input className="form-control" ref="time" type="duration" value={this.props.movie.time}
                               id="movie-duration"/>
                      </div>
                    </div>
                  </div>
                  <div className="tm-schedules-box-info-right">
                    <div className="form-group description">
                      <label for="movie-synopsis">Synopsis</label>
                      <textarea className="form-control" ref="description" id="movie-synopsis" rows="22"
                                value={this.props.movie.description}/>
                    </div>
                  </div>
                </div>
                <div className="tm-schedules-box-link">
                  <button type="submit" name="submit" className="tm-schedules-box-link-left col-sm-3">
                    Enregistrer<br/>
                    <span className="glyphicon glyphicon-ok"/>
                  </button>
                  <button onClick={this.props.deleteMovie.bind(this)} className="tm-schedules-box-link-left col-sm-3">
                    Supprimer<br/>
                    <span className="glyphicon glyphicon-remove"/>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      );
    }
    else
      return (<div />);
  }
}

MovieEditionForm.PropTypes = {
  editMovie: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired
};

export default MovieEditionForm;