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