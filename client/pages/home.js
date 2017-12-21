import React, { Component } from 'react';
import { Tabs } from 'antd-mobile';
import LazyLoad from 'react-lazyload';
import Header from './header'
import { connect } from 'react-redux';
import '../styles/home.less';

import Recommend from '../components/Home/recommend';
import PlayList from '../components/Home/playList';
import Ranking from '../components/Home/rank';


const tabs = [
  { title: "个性推荐" },
  { title: "歌单" },
  { title: "排行榜" },
];


class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Header />
        <Tabs tabs={tabs}
              initialPage={0}
              onChange={(tab, index) => { console.log('onChange', index, tab); }}
              onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <LazyLoad height={200}>
              <Recommend/>
            </LazyLoad>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <LazyLoad height={200}>
              <PlayList/>
            </LazyLoad>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <LazyLoad height={200}>
              <Ranking/>
            </LazyLoad>
          </div>
        </Tabs>
      </div>
    )
  }
}

function select(state) {
  return {

  }
}

export default connect(select)(Home);
