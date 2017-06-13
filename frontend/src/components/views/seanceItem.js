/**
 * Created by presci on 06/06/17.
 */
import React from 'react';
import HourButtonList from '../containers/hour-button-list-container'

const SeanceItem = ({ data, schedules, link }) => (

<div className="row tm-schedules-box">
    <div className="tm-schedules-box-info">
        <div className="tm-schedules-box-info-left">
            <p className="text-uppercase margin-bottom-20 title">{data.name}</p>
            <p className="text-uppercase margin-bottom-20 title">{data.movie_genre}</p>
            <p className="release-date">{data.release}</p>
            <p className="duration">{data.time}</p>
            <p className="type">{data.genre}</p>
        </div>
        <div className="tm-schedules-box-info-right">
            <p className="description">
                {data.description}
            </p>
        </div>
    </div>

    <div className="tm-schedules-box-link">
        <div className="tm-schedules-box-link-left">
            <ul className="schedules">
                <li className="schedule">
                    <span className="schedules-title row">Séances</span>
                    <HourButtonList
                    key = {data.id}
                    data = {schedules}
                    link = {link}
                  />
                </li>
            </ul>
        </div>
    </div>
</div>
);

export default SeanceItem