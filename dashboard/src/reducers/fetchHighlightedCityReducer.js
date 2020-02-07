import { FETCH_HIGHLIGHTED_CITY } from '../actions/types';

export default (state = null, action) => {
  if (action.type === FETCH_HIGHLIGHTED_CITY) {
    return action.payload;
  }

  return state;
};
