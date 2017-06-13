import React, { PropTypes } from 'react';

class Banner extends React.Component {

  render() {

    return (
      <section className="tm-small-banner">
        <div className="flexslider flexslider-banner">
          <ul className="slides">
            <li>
              <div className="tm-small-banner-inner">
                <h1 className="tm-small-banner-title">JS <span className="tm-yellow-text">Title</span></h1>
                <p className="tm-small-banner-subtitle">Subtitle</p>
              </div>
              <img src="https://pic-588ku.pngtree.com/back_pic/02/50/79/03577f14404e520.jpg" alt="Image" />
            </li>
          </ul>
        </div>
      </section>

    );
  }
}

/*Banner.PropTypes = {
  bannerTitle: PropTypes.string.isRequired,
  bannerSubtitle: PropTypes.string.isRequired
};*/

export default Banner;