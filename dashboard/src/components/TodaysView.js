import React, { Component } from 'react';
import { connect } from 'react-redux';
import { weatherData } from '../actions';
import WeatherIcon from './WeatherIcon';
import { unixToDay, unixToStandardConverter, decimalToPercent } from './Util';

class TodaysView extends Component {
  componentDidUpdate(prevState) {
    if (this.props.searchedItem.length !== 0) {
      if (this.props.weather === prevState.weather) {
        this.props.weatherData();
      }
    }
  }

  renderInput() {
    if (Object.keys(this.props.weather).length === 0) {
      return <div>Hi there</div>;
    }

    let currentWeather = this.props.weather.data.currently;
    let hourlWeather = this.props.weather.data.hourly;
    return (
      <div>
        <h3>Today: {unixToDay(currentWeather.time, 'Date')}</h3>
        <h3>Location: {this.props.locationName}</h3>
        <h3>Temperature: {Math.round(currentWeather.temperature)}° F</h3>
        <h3>
          Icon: <WeatherIcon icon={currentWeather.icon} />
        </h3>

        <h3>Feels Like {Math.round(currentWeather.apparentTemperature)}</h3>
        <h3>
          Sunset Time:{' '}
          {unixToStandardConverter(
            this.props.weather.data.daily.data[0].sunsetTime
          )}
        </h3>

        <h3>-------------------</h3>

        <h2>Chance of rain</h2>
        <h3>
          {unixToStandardConverter(hourlWeather.data[2].time)}:{' '}
          {decimalToPercent(hourlWeather.data[2].precipProbability)}
        </h3>
        <h3>
          {unixToStandardConverter(hourlWeather.data[4].time)}:
          {decimalToPercent(hourlWeather.data[4].precipProbability)}
        </h3>
        <h3>
          {unixToStandardConverter(hourlWeather.data[6].time)}:
          {decimalToPercent(hourlWeather.data[6].precipProbability)}
        </h3>
        <h3>
          {unixToStandardConverter(hourlWeather.data[8].time)}:
          {decimalToPercent(hourlWeather.data[8].precipProbability)}
        </h3>
        <h3>
          {unixToStandardConverter(hourlWeather.data[10].time)}:
          {decimalToPercent(hourlWeather.data[10].precipProbability)}
        </h3>
        <h3>
          {unixToStandardConverter(hourlWeather.data[12].time)}:
          {decimalToPercent(hourlWeather.data[12].precipProbability)}
        </h3>
      </div>
    );
  }

  render() {
    return <div>{this.renderInput()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    searchedItem: state.searchPhrase,
    weather: state.weather,
    locationName: state.clickedSearch
  };
};

export default connect(mapStateToProps, { weatherData })(TodaysView);
