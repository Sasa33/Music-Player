import React, { Component } from 'react'
import './ranking.less'
import {
  connect
} from "react-redux";
import { getOfficialRank, getNationalRank } from '../../actions/rank';

class Ranking extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getOfficialRank());
    this.props.dispatch(getNationalRank())
  }

  render() {
    const { officialRank, nationalRank } = this.props;
    console.log(officialRank);
    return(
      <div style={{ width:'100%', background:'#f5f5f9'}}>
        <div className="rank-title">官方榜</div>
        {
          officialRank.map((item, index) => (
            <div key={index} className='official-content'>
              <img src={item.coverImgUrl}/>
            </div>
          ))
        }
        <div className="rank-title">全球榜</div>
        {
          nationalRank.map((item, index) => (
            <div key={index} className='official-content'>
              <img src={item.coverImgUrl}/>
            </div>
          ))
        }
      </div>
    )
  }
}

function select(state){
  return{
    officialRank: state.rank.officialRank,
    nationalRank: state.rank.nationalRank,
  }
}

export default connect(select)(Ranking);