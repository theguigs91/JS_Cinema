import React from 'react';
import '../../src/misc/css/flexslider.css'

const Home = React.createClass({
  render: function() {
    return (
    <section className="tm-small-banner">
      <div className="flexslider-banner">
        <ul className="slides">
          <li>
            <div className="tm-small-banner-inner">
              <h1 className="tm-small-banner-title">JS <span className="tm-yellow-text">CINEMA</span></h1>
              <p className="tm-small-banner-subtitle">Bienvenue</p>
            </div>
            <img src="http://www.ganesham.co.in/img/banner-1.jpg" height={500} alt="Image" />
          </li>
        </ul>
      </div>
    </section>


    );
  }
});

export default Home;
