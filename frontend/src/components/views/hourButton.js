/**
 * Created by presci on 07/06/17.
 */
import React from 'react'
import { Link } from 'react-router-dom';

/*const movie = {
  "id": 3,
  "name": "Problemos",
  "realisator": "Eric Judor",
  "time": "01:25:00",
  "genre": "Comédie",
  "description": "Jeanne et Victor sont deux jeunes Parisiens de retour de vacances. En chemin, ils font une halte pour saluer leur ami Jean-Paul, sur la prairie où sa communauté a élu résidence.",
  "date": "2017-10-09T22:00:00.000Z"
};
const seance = {
  "id": 6,
  "room_id": 2,
  "movie_id": 3,
  "places_available": 368,
  "date": "2017-05-15T22:00:00.000Z",
  "time": "22:00:00"
};
const room = {
  "id": 2,
  "numero": 2,
  "places_max": 368
};*/

// data = seance
const HourButton = ({ data, link }) => (
  <Link to={ link + data.id }>
    <button type="button" className="btn btn-default">{data.time}</button>
  </Link>
);

export default HourButton;