import React, { Component } from 'react';
import { connect } from 'react-redux';

import './recommend.less';
import Carousels from './carousels'

class Recommend extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        <Carousels/>
      </div>
    )
  }
}

function select(state) {
  return {

  }
}

export default connect(select)(Recommend);