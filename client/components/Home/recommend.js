import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import { Flex } from 'antd-mobile';
import { getPersonalized } from '../../actions/home';

import './recommend.less';
import Carousels from './carousels'

class Recommend extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getPersonalized())
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        <Carousels/>
        <div className="recommend-container">
          <Flex>
            <Flex.Item>
              <div>
                <FontAwesome key="address-card-o" name="address-card-o"/>
              </div>
              <span>私人FM</span>
            </Flex.Item>
            <Flex.Item>
              <div>
                <FontAwesome key="calendar" name="calendar"/>
              </div>
              <span>每日歌曲推荐</span>
            </Flex.Item>
            <Flex.Item>
              <div>
                <FontAwesome key="signal" name="signal"/>
              </div>
              <span>云音乐热歌榜</span>
            </Flex.Item>
          </Flex>
        </div>
        <div className="recommend-songs">
          <div className="recommend-title">推荐歌单 &gt;</div>
          {
            this.props.personalizedDetail.map((item, index) => (
              <div key={index} className="recommend-content content">
                <div className='song-cover'>
                  <p>
                    <i className='fa fa-headphones'/> {item.playCount}
                  </p>
                  <img src={item.picUrl}/>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

function select(state) {
  return {
    personalizedDetail: state.home.personalizedDetail
  }
}

export default connect(select)(Recommend);