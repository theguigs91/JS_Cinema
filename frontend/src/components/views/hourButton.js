/**
 * Created by presci on 07/06/17.
 */
import React from 'react'
import { Link } from 'react-router-dom';
import { HHMMSSToHHMM } from '../../helpers/time-helper';

// data = seance
const HourButton = ({ data, link }) => (
  <Link to={ link + data.id }>
    <button type="button" className="btn btn-default">{HHMMSSToHHMM(data.time_start) + '-' + HHMMSSToHHMM(data.time_end)}</button>
  </Link>
);

export default HourButton;