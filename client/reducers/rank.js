import { GET_OFFICIAL_RANK } from '../actions/rank';

const initialState = {
  officialRank: [],
};

export default function rank(state = initialState, action) {
  switch(action.type) {
    case GET_OFFICIAL_RANK:
      return Object.assign({}, state, {
        officialRank: action.officialRank,
      });
    default:
      return state;
  }
}