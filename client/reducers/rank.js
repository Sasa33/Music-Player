import { GET_OFFICIAL_RANK, GET_GLOBAL_RANK } from '../actions/rank';

const initialState = {
  officialRank: [],
  nationalRank: [],
};

export default function rank(state = initialState, action) {
  switch(action.type) {
    case GET_OFFICIAL_RANK:
      return Object.assign({}, state, {
        officialRank: action.officialRank,
      });
    case GET_GLOBAL_RANK:
      return Object.assign({}, state, {
        nationalRank: action.nationalRank,
      });
    default:
      return state;
  }
}