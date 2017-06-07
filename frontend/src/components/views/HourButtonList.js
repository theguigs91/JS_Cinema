/**
 * Created by presci on 03/06/17.
 */
import React from 'react'
import { connect } from 'react-redux'
import HourButton from '../../components/views/hourButton'

const HourButtonList = ({ data }) => (
  <div>
    {data.map(el =>
      <HourButton
        key = {el.id}
        data = {el}
      />
    )}
  </div>
);

export default connect()(HourButtonList);