import React from 'react';
import Banner from '../views/banner';

class AboutContainer extends React.Component {

  render() {

    this.style = {
      height: 200,
      width: 200
    };

    return (
      <div>
        <Banner
          titleWhiteBefore="A"
          titleYellow="propos"
          titleWhiteAfter=""
          subtitle="Apprenez à nous connaître!"
        />

        <section className="container tm-home-section-1" id="more">
          <div className="row">

            <div className="flexslider flexslider-about effect2">
              <div className="slides">
                <img src="http://beatthetravelagent.com/images/unusual-restaurants/Sci-Fi-Dine-In-Theater-florida-web.jpg" alt="image"  />
                <div className="flex-caption">
                  <h2 className="slider-title">JS Cinema</h2>
                  <h3 className="slider-subtitle">Notre histoire</h3>
                  <p className="slider-description">
                    Au début des années 1930, Jacques Haïk, riche producteur et distributeur dans le cinéma, est alors propriétaire de l'Olympia. Il se lance dans la construction d'une salle de cinéma complètement extravagante : celle-ci pourrait accueillir plus de 5 000 spectateurs sur une superficie de 2 000 m2, avec un plafond culminant à plus de 30 m, représentant une voûte étoilée lumineuse.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="section-margin-top about-section">
            <div className="row">
              <div className="tm-section-header">
                <div className="col-lg-3 col-md-3 col-sm-3"><hr /></div>
                <div className="col-lg-6 col-md-6 col-sm-6"><h2 className="tm-section-title">Qui sommes-nous</h2></div>
                <div className="col-lg-3 col-md-3 col-sm-3"><hr /></div>
              </div>
            </div>
            <div className="row col-lg-offset-1">
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="tm-about-box-1">
                  <img style={this.style} src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/11755255_10207092672454663_3522116054077520217_n.jpg?oh=09aba9b747b81432a148959194cbae93&oe=59A549B6" alt="img" className="tm-about-box-1-img" />
                  <h3 className="tm-about-box-1-title"><span>Guillaume Audinet</span></h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="tm-about-box-1">
                  <img src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAP5AAAAJGZjNTYzODkxLTk5MzUtNGU5ZS1hMTUzLTY3MWExOWY3MmYxNg.jpg" alt="img" className="tm-about-box-1-img" />
                  <h3 className="tm-about-box-1-title"><span>Prescillia San</span></h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="tm-about-box-1">
                  <img src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/5/005/083/22b/24c4d54.jpg" alt="img" className="tm-about-box-1-img" />
                  <h3 className="tm-about-box-1-title"><span>Kelly Luu</span></h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AboutContainer;