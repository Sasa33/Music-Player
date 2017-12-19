import * as Ajax from './ajax';
export const GET_PERSONAL_DETAIL = 'GET_PERSONAL_DETAIL';
export const GET_PLAYLIST_DETAIL = 'GET_PLAYLIST_DETAIL';

const personalizedDetail = (response) => ({
  type: GET_PERSONAL_DETAIL,
  personalizedDetail: response,
});

export const getPersonalized = () => {
  return function (dispatch) {
    Ajax.getAjax('/api/personalized', (response) => {
      if (response) {
        dispatch(personalizedDetail(response.data))
      }
    })
  }
};

const playlistDetail = (response) => ({
  type: GET_PLAYLIST_DETAIL,
  playlistDetail: response,
});

export const getPlaylist = () => {
  return function (dispatch) {
    Ajax.getAjax('/api/playlist', (response) => {
      if (response) {
        dispatch(playlistDetail(response.data))
      }
    })
  }
};