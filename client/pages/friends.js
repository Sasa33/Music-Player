import React, { Component } from 'react';
import Header from './header';
import '../styles/friends.less';

class Friends extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='friends'>
        <Header/>
        <div>这是朋友圈页面</div>
      </div>
    )
  }
}

export default Friends;