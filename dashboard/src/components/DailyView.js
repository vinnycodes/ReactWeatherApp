import React, { Component } from 'react';
import { connect } from 'react-redux';
import { unixToDay, decimalToPercent } from './Util';
import WeatherIcon from './WeatherIcon';

class DailyView extends Component {
  componentDidUpdate() {
    // let sevenDayData = this.props.weatherDailyData.daily.data;
    // sevenDayData = sevenDayData.slice(1);
    // console.log(sevenDayData);
    // console.log(unixToDay(sevenDayData[0].time, 'Date'));
    // console.log(sevenDayData[0].time);
  }

  renderInput() {
    if (Object.keys(this.props.weatherData).length === 0) {
      return 'Daily View';
    }

    let sevenDayData = this.props.weatherDailyData.daily.data;
    sevenDayData = sevenDayData.slice(1);
    return sevenDayData.map((day, index) => (
      <div key={index} className="ui divided list">
        <ul>
          <li>{unixToDay(day.time, 'Day')}</li>
          <li>
            <img
              src="/Imgs/rainDrop.svg"
              alt="rain drop"
              style={{ height: '1.5rem' }}
            />
            {decimalToPercent(day.precipProbability)}%
          </li>
          <li>
            {' '}
            <WeatherIcon icon={day.icon} />
          </li>
          <li>
            {' '}
            TempLow: {Math.round(day.temperatureLow)}°F || TempHigh:{' '}
            {Math.round(day.temperatureHigh)}°F
          </li>
        </ul>
      </div>
    ));
  }

  render() {
    return <div>{this.renderInput()}</div>;
  }
}

const mapStateToProps = state => {
  return { weatherData: state.weather, weatherDailyData: state.weather.data };
};

export default connect(mapStateToProps)(DailyView);
