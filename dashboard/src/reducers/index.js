import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import weatherDataReducer from './weatherDataReducer';
import clickedReducer from './clickedReducer';
import fetchHighlightedCityReducer from './fetchHighlightedCityReducer';

export default combineReducers({
  clickedSearch: clickedReducer,
  searchPhrase: searchReducer,
  weather: weatherDataReducer,
  fetchCities: fetchHighlightedCityReducer
});
