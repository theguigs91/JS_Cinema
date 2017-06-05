/**
 * Created by presci on 03/06/17.
 */
import React from 'react'
import { connect } from 'react-redux'
import templatemo from '../css/templatemo-style.css'
import bootstrap from '../css/bootstrap.min.css'

const MovieItem = ({ data }) => (
    <div className="caca">
        <div className="toto">
            <p className="pipi">{data.name}</p>
            <p className="pipi">{data.realisator}</p>
            <p className="release-date">{data.release}</p>
            <p className="duration">{data.time}</p>
            <p className="type">{data.genre}</p>
            <img src="../img/rating.png" alt="image"/>
        </div>
        <div className="ok">
            <p className="description">
                {data.description}
            </p>
        </div>
    </div>
);

export default MovieItem;