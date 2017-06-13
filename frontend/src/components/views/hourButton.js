/**
 * Created by presci on 07/06/17.
 */
import React from 'react'
import { Link } from 'react-router-dom';

// data = seance
const HourButton = ({ data, link }) => (
  <Link to={ link + data.id }>
    <button type="button" className="btn btn-default">{data.time}</button>
  </Link>
);

export default HourButton;