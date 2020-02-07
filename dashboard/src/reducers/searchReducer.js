import { SUBMITTED_SEARCH } from '../actions/types';

// This will return coordinates for wherever the user searches
// Due to the mapBox api, the coordinates need to be switched before going into the darkSky api so I use the reverse method on that payload
// The reason they need to be flipped is because mapBox gives LONG, LAT instead of (correctly) LAT, LONG

export default (state = [], action) => {
  if (action.type === SUBMITTED_SEARCH) {
    return action.payload.reverse();
  }

  return state;
};
