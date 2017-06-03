/**
 * Created by presci on 03/06/17.
 */
import React from 'react'
import { connect } from 'react-redux'
import templatemo from '../css/templatemo-style.css'

/* TODO: charger tous les css */

const MovieItem = ({ data }) => (
    <div className={templatemo.tm-movies-box-1-info}>
        <div className="tm-movies-box-1-info-left">
            <p className="text-uppercase margin-bottom-20 title">{data.title}</p>
            <p className="release-date">{data.release}</p>
            <p className="duration">{data.duration}</p>
            <p className="type">{data.type}</p>
            <img src="img/rating.png" alt="image" className="margin-bottom-5"/>
        </div>
        <div className="tm-movies-box-1-info-right">
            <p className="description">
                {data.description}
            </p>
        </div>
    </div>
);

export default MovieItem;