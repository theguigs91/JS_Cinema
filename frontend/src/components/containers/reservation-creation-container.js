/**
 * Created by kelly on 06/06/17.
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ReservationCreationForm from '../views/reservation-creation-form';
import * as scheduleApi from '../../api/schedule-api';
import * as CONST from '../../const';


class ReservationCreationContainer extends React.Component {

  componentWillMount() {

    /*this.movie = {
      "id": 3,
      "name": "Problemos",
      "realisator": "Eric Judor",
      "time": "01:25:00",
      "genre": "Comédie",
      "description": "Jeanne et Victor sont deux jeunes Parisiens de retour de vacances. En chemin, ils font une halte pour saluer leur ami Jean-Paul, sur la prairie où sa communauté a élu résidence.",
      "date": "2017-10-09T22:00:00.000Z"
    };
    this.seance = {
      "id": 6,
      "room_id": 2,
      "movie_id": 3,
      "places_available": 368,
      "date": "2017-05-15T22:00:00.000Z",
      "time": "22:00:00"
    };
    this.room = {
      "id": 2,
      "numero": 2,
      "places_max": 368
    };*/


    this.seanceId = this.props.match.params.seanceId;

    console.log('[ReservationCreationContainer] seanceId = ', this.seanceId);
    scheduleApi.getScheduleFromId(this.seanceId);
  }

  render() {

    if (this.props.seance) {
      return (
        <ReservationCreationForm
          seance={this.props.seance}
        />
      )
    }
    else
      return null;
  }
}

const mapStateToProps = store => {
  return {
    seance: store.scheduleState.schedule,
  }
};

export default connect(mapStateToProps)(ReservationCreationContainer);