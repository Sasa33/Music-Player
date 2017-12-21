import React, { Component } from 'react';
import { List } from 'antd-mobile';
import FontAwesome from 'react-fontawesome';
import Header from './header';
import '../styles/music.less';

const Item = List.Item;

class Music extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='my-music'>
        <Header/>
        <List renderHeader={null} className="my-music-list">
          <Item>
            <FontAwesome type='music' name='music'/>
            <span>本地音乐 <span className='songs-num'>(0)</span></span>
          </Item>
          <Item>
            <FontAwesome type='music' name='music'/>
            <span>最近播放 <span className='songs-num'>(0)</span></span>
          </Item>
          <Item>
            <FontAwesome type='music' name='music'/>
            <span>下载管理 <span className='songs-num'>(0)</span></span>
          </Item>
          <Item>
            <FontAwesome type='music' name='music'/>
            <span>我的电台 <span className='songs-num'>(0)</span></span>
          </Item>
          <Item>
            <FontAwesome type='music' name='music'/>
            <span>我的收藏 <span className='songs-num'>(0)</span></span>
          </Item>
        </List>
        <div className='create-playlist'>
          <span>
              <FontAwesome name='angle-right' key='angle-right-1'/> &nbsp;创建的歌单(0)
          </span>
          <span className='handle'>
            <FontAwesome name='cog' key='cog-1'/>
          </span>
        </div>
        <div className='collect-playlist'>
          <span>
            <FontAwesome name='angle-right' key='angle-right-2'/> &nbsp;收藏的歌单(0)
          </span>
          <span className='handle'>
            <FontAwesome name='cog' key='cog-2'/>
          </span>
        </div>
      </div>
    )
  }
}

export default Music;