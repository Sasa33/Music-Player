import { GET_PERSONAL_DETAIL, GET_PLAYLIST_DETAIL } from '../actions/home';

const initialState = {
  personalizedDetail: [],
  playlistDetail: [],
};

export default function user(state = initialState, action) {
  switch(action.type) {
    case GET_PERSONAL_DETAIL:
      return Object.assign({}, state, {
        personalizedDetail: action.personalizedDetail,
      });
    case GET_PLAYLIST_DETAIL:
      return Object.assign({}, state, {
        playlistDetail: action.playlistDetail,
      });
    default:
      return state;
  }
}