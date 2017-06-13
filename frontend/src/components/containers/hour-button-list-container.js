/**
 * Created by presci on 03/06/17.
 */
import React from 'react'
import { connect } from 'react-redux'
import HourButton from '../views/hourButton'

const HourButtonList = ({ data, link }) => (
  <div className="btn-group col-lg-12 col-md-12 col-sm-12" role="group">
    {data.map(el =>
      <HourButton
        key = {el.id}
        data = {el}
        link = {link}
      />
    )}
  </div>
);

export default connect()(HourButtonList);