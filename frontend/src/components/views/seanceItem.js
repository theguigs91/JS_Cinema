/**
 * Created by presci on 06/06/17.
 */
import React from 'react';
import HourButtonList from '../containers/hour-button-list-container'

const SeanceItem = ({ data, schedules, link }) => (

<div className="row tm-schedules-box">
    <div className="col-lg-3 col-mg-3 col-sm-3">
        <img src="../img/movie1.jpg" alt="image" className="img-responsive movie-img"/>
    </div>
    <div className="col-lg-9 col-mg-9 col-sm-9">
        <div className="tm-schedules-box-info">
            <div className="tm-schedules-box-info-left">
                <p className="text-uppercase margin-bottom-20 title">Titre: {data.name}</p>
                <p className="text-uppercase margin-bottom-20 title">{data.movie_genre}</p>
                <p className="release-date">{data.release}</p>
                <p className="duration">{data.time}</p>
                <p className="type">{data.genre}</p>
                <img src="../img/rating.png" alt="image" className="margin-bottom-5"/>
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
                        <div className="btn-group col-lg-12 col-md-12 col-sm-12" role="group">
                          <HourButtonList
                            key = {data.id}
                            data = {schedules}
                            link = {link}
                          />
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</div>
);

export default SeanceItem