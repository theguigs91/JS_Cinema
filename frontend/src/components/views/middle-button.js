/**
 * Created by kelly on 13/06/17.
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

/**
 * Button in the middle of the page (between banner and body)
 */
class MiddleButton extends React.Component {

  render() {

    return (

        <div className="row col-lg-offset-4 col-md-offset-4 col-sm-offset-4">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="tm-home-box-1">
              <div className="form-group tm-yellow-gradient-bg text-center">
                <button className="tm-yellow-btn">
                  <Link to={this.props.link}>{this.props.buttonStr}</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

MiddleButton.PropTypes = {
  buttonStr: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default MiddleButton;