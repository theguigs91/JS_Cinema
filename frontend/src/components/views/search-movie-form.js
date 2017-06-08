/**
 * Created by presci on 08/06/17.
 */
import React from 'react';

export default React.createClass({

  render: function() {

    return (
      <div className="col-lg-2 col-md-2 col-sm-2 search">
        <form onSubmit={this.props.searchMovie.bind(this)} className="date-picker-form">
          <div className="input-group">
            <input type="text" ref="search" id="search" className="form-control" placeholder="Rechercher un film..."/>
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                    <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                  </button>
                </span>
          </div>
        </form>
      </div>
    );
  }
});