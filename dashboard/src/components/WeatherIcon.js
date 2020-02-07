import React, { Component } from 'react';
const Skycons = require('skycons')(window);

class WeatherIcon extends Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
  }

  typeOfIcon = icon => {
    switch (icon.toUpperCase()) {
      case 'CLEAR-DAY':
        return 'CLEAR_DAY';
      case 'CLEAR-NIGHT':
        return 'CLEAR_NIGHT';
      case 'PARTLY-CLOUDY-DAY':
        return 'PARTLY_CLOUDY_DAY';
      case 'PARTLY-CLOUDY-NIGHT':
        return 'PARTLY_CLOUDY_NIGHT';
      case 'CLOUDY':
        return 'CLOUDY';
      case 'RAIN':
        return 'RAIN';
      case 'SLEET':
        return 'SLEET';
      case 'SNOW':
        return 'SNOW';
      case 'WIND':
        return 'WIND';
      case 'FOG':
        return 'FOG';
      case 'showers-day':
        return 'SHOWERS_DAY';
      case 'showers-night':
        return 'SHOWERS_NIGHT';
      case 'rain-snow':
        return 'RAIN_SNOW';
      case 'rain-snow-showers-day':
        return 'RAIN_SNOW_SHOWERS_DAY';
      case 'rain-snow-showers-night':
        return 'RAIN_SNOW_SHOWERS_NIGHT';
      case 'snow-showers-day':
        return 'SNOW_SHOWERS_DAY';
      case 'snow-showers-night':
        return 'SNOW_SHOWERS_NIGHT';
      case 'thunder':
        return 'THUNDER';
      case 'thunder-rain':
        return 'THUNDER_RAIN';
      case 'thunder-showers-day':
        return 'THUNDER_SHOWERS_DAY';
      case 'thunder-showers-night':
        return 'THUNDER_SHOWERS_NIGHT';
      case 'hail':
        return 'HAIL';
      default:
        break;
    }
  };

  componentDidMount() {
    const newIcon = this.typeOfIcon(this.props.icon);

    const skycons = new Skycons({ monochrome: false });
    skycons.add(this.ref.current, Skycons[newIcon]);
    skycons.play();
  }

  componentDidUpdate() {
    const newIcon = this.typeOfIcon(this.props.icon);

    const skycons = new Skycons({ monochrome: false });
    skycons.add(this.ref.current, Skycons[newIcon]);
    skycons.play();
  }

  render() {
    return (
      <div className="App">
        <canvas ref={this.ref} width="64" height="64" />
      </div>
    );
  }
}

export default WeatherIcon;
