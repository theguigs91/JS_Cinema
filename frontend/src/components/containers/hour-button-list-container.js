/**
 * Created by presci on 03/06/17.
 */
import React from 'react'
import { connect } from 'react-redux'
import HourButton from '../views/hourButton'

const HourButtonList = ({ data, link }) => (
  <div>
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