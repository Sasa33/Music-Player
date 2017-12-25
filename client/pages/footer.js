import React, { Component } from 'react'
import { Modal,List, Button, Icon } from 'antd-mobile';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import '../styles/footer.less';

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let maskProps;
if (isIPhone) {
  maskProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    }
  }


  renderHeader(){
    return(
      <div>
        <div className="option-area" style={{ position: 'relative' }}>
          <div className="select-type">
                    <span className="loop" >
                        <img src="/svgs/list-loop.svg" />列表循环
                    </span>
            <span className="loop" >
                        <img src="/svgs/random-loop.svg" />随机播放
                    </span>
            <span className="loop" >
                        <img src="/svgs/single-loop.svg" />单曲循环
                    </span>
          </div>
          <div className="delete">
            <img src="/svgs/delete.png" />清空
          </div>
        </div>
        <span
          style={{
            position: 'absolute', right: 3, top: 15,
          }}
          onClick={this.onClose.bind(this)}
        >
                <Icon type="cross" />
            </span>
      </div>

    )}


  //弹出框隐藏
  onClose() {
    this.setState({
      modal: false,
    })
  }

  //弹出框显示
  showList() {
    this.setState({
      modal: true,
    })
  }

  //暂停播放
  toggleStatus(){
    let myaudio = document.getElementById('audioPlay');
    if (myaudio.paused) {
      myaudio.play();
    } else {
      myaudio.pause();
    }
  }

  canPlaySong() {
    console.log('start to play audio...')
    let myaudio = document.getElementById('audioPlay');
    myaudio.play();
  }

  render() {
    return(
      <div className="footer">
        <div className="player-mini">
          <div className="mini-content">
            <audio src="/mv/徐佳莹 - 身骑白马.mp3" onCanPlay={() => this.canPlaySong()} id="audioPlay"
                   crossOrigin="anonymous" />
            <div className="music-logo">
              <Link to='/playing'>
                <img src="/imgs/play_song_cover.jpg"/>
              </Link>
            </div>
            <div className="info">
              <div className="name">身骑白马</div>
              <div className="artist">徐佳莹</div>
            </div>
            <div className="mini-option">
              <div style={{width:'60px',height:'60px'}}>
                <div className="mini-btn player" onClick={() => this.toggleStatus()}/>
              </div>
              <div className="mini-btn player-list" onClick={this.showList.bind(this)}/>
              <Modal
                popup
                visible={this.state.modal}
                maskClosable={false}
                onClose={this.onClose.bind(this)}
                animationType="slide-up"
              >
                <div>
                  <List renderHeader={()=>this.renderHeader()}
                        className="play-songs-list"
                  >
                    {['身骑白马'].map((i, index) => (
                      <List.Item key={index}>{i}</List.Item>
                    ))}
                  </List>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function select(state){
  return{

  }
}

export default connect(select)(Footer);