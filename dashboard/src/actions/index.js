import {
  SUBMITTED_SEARCH,
  GET_WEATHERDATA,
  CLICKED_SEARCH,
  FETCH_HIGHLIGHTED_CITY
} from './types';
import mapBox, { accessToken } from '../apis/mapBox';
import darkSky from '../apis/darkSky';
import highlightedCity from '../apis/highlightedCity';
// import darkSky from '../apis/darkSky';

export const clickedSearch = searchTerm => {
  return { type: CLICKED_SEARCH, payload: searchTerm };
};

// Search Phrase turned into geolocation (lat, long)

export const searchPhrase = submittedSearch => async dispatch => {
  const response = await mapBox.get(
    `/${submittedSearch}.json?access_token=${accessToken}`
  );

  dispatch({
    type: SUBMITTED_SEARCH,
    payload: response.data.features[0].geometry.coordinates
  });
};

// Get all of the weather data from darksky api

export const weatherData = (exclude = 'alerts, flags') => async (
  dispatch,
  getState
) => {
  const [lat, long] = getState().searchPhrase;

  const response = await darkSky.get(
    `14087dfbaafa09516688998dfadf5c73/${lat},${long}?exclude=${exclude}`
  );

  dispatch({ type: GET_WEATHERDATA, payload: response });
};

// Get highlighted City from local api Database
export const fetchHighlightedCity = () => async dispatch => {
  const response = await highlightedCity.get('/highlightedCities');

  dispatch({ type: FETCH_HIGHLIGHTED_CITY, payload: response.data });
};
