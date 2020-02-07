import { GET_WEATHERDATA } from '../actions/types';

export default (state = {}, action) => {
  if (action.type === GET_WEATHERDATA) {
    return action.payload;
  }

  return state;
};
