import React, { Component } from 'react'
import { connect } from "react-redux"
import FontAwesome from 'react-fontawesome'
import '../styles/search.less'
import { getSearchDetail } from '../actions/search'


const topSearch = ['谢天笑','风去云不回','GAI爷','你坐最后一排，我坐讲台旁边','China-U','薛之谦','林俊杰','未来的进击','alan walker']


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchRecords: [],
    }
  }

  handleBack() {
    window.history.go(-1);
  }

  searchSongs() {
    const search = this.search.value;
    console.log('search string: ');
    console.log(search)
    if (search !== '') {
      this.props.dispatch(getSearchDetail(search));
    } else {
      this.props.dispatch(getSearchDetail());
    }
  }

  searchItem(item) {
    this.search.value = item;
    this.props.dispatch(getSearchDetail(item));
    this.changeState()
  }

  changeState() {
    let searchRecord = JSON.parse(window.localStorage.getItem('searchRecord'));
    this.setState({
      searchRecords: searchRecord
    })
  }

  componentDidMount() {
    this.changeState();
  }

  deleteRecord(item) {
    let searchRecord = JSON.parse(window.localStorage.getItem('searchRecord'));
    Array.prototype.removeByValue = function(val) {
      for(var i=0; i<this.length; i++) {
        if(this[i] == val) {
          this.splice(i, 1);
          break;
        }
      }
    };
    searchRecord.removeByValue(item);
    window.localStorage.setItem('searchRecord', JSON.stringify(searchRecord));
    this.setState({
      searchRecords: searchRecord
    });
  }

  render() {
    const { searchRecords } = this.state;
    const { searchResult } = this.props;
    console.log(searchResult)

    return(
      <div className='search login'>
        <div className='login-title'>
          <a onClick={() => this.handleBack()}>
            <FontAwesome name='arrow-left' key='arrow-left'/>
          </a>
          <div className="search-input-container">
            <input
              className='search-input'
              placeholder="搜索音乐、歌手、歌词、用户"
              ref = {(ref) => this.search = ref}
              onBlur= {() => this.searchSongs()}
            />
          </div>
        </div>
        {
          searchResult.length === 0 ? (
            <div>
              <div className='search-content'>
                <p>热门搜索</p>
                <div className='search-label'>
                  {
                    topSearch.map((item, index) => {
                      return (
                        <a onClick={() => this.searchItem(item)} key={index}>{item}</a>
                      )
                    })
                  }
                </div>
              </div>
              <ul className='search-record'>
                {
                  searchRecords.map((item, index) => {
                    return (
                      <li key={index} className='record-item'>
                        <FontAwesome name='clock-o' className='record-left'/>
                        <span onClick={()=>this.searchItem(item)}>{item}</span>
                        <FontAwesome name='times-circle' className='record-right'
                                     onClick={() => this.deleteRecord(item)}/>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          ) : (
            <ul className='search-result'>
              {
                searchResult.map((item, index) => {
                  return (
                    <li key={index}>
                      <div className='song-name'>{item.name}</div>
                      <div className='song-artist'>{item.artistName} - {item.albumName}</div>
                      <div className='song-right'>
                        <FontAwesome name='ellipsis-v' key='ellipsis-v'/>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          )
        }

      </div>
    )
  }
}

function select(state){
  return{
    searchResult: state.search.searchDetail
  }
}

export default connect(select)(Search);