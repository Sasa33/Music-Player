import { CHANGE_TEST } from '../actions/home';

const initialState = {
  test: ''
};

export default function user(state = initialState, action) {
  switch(action.type) {
    case CHANGE_TEST:
      return Object.assign({}, state, {
        test: action.test,
      });
    default:
      return state;
  }
}