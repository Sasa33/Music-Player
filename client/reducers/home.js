import { GET_PERSONAL_DETAIL } from '../actions/home';

const initialState = {
  personalizedDetail: []
};

export default function user(state = initialState, action) {
  switch(action.type) {
    case GET_PERSONAL_DETAIL:
      return Object.assign({}, state, {
        personalizedDetail: action.personalizedDetail,
      });
    default:
      return state;
  }
}