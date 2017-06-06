/**
 * Created by presci on 03/06/17.
 */
import React from 'react'
import { connect } from 'react-redux'
import templatemo from '../css/templatemo-style.css'
import bootstrap from '../css/bootstrap.min.css'

const MovieItem = ({ data }) => (
    <div className="tm-movies-box-1-info">
        <div className="tm-movies-box-1-info-left">
            <p className="text-uppercase margin-bottom-20 title">{data.name}</p>
            <p className="realisator">{data.realisator}</p>
            <p className="release-date">{data.release}</p>
            <p className="duration">{data.time}</p>
            <p className="type">{data.genre}</p>
            <img src="../img/rating.png" alt="image" className="margin-bottom-5"/>
        </div>
        <div className="tm-movies-box-1-info-right">
            <p className="description">
                {data.description}
            </p>
        </div>
        <div className="tm-movies-box-1-link">
            <div className="tm-movies-box-1-link-left available">
                Disponible
            </div>
            <a href="schedules.html" className="tm-movies-box-1-link-right schedule">
                Séances
            </a>
        </div>
    </div>
);

export default MovieItem;