import { CLICKED_SEARCH } from '../actions/types';

export default (state = '', action) => {
  if (action.type === CLICKED_SEARCH) {
    return action.payload;
  }

  return state;
};
