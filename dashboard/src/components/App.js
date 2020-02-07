import React, { Component } from 'react';
import TodaysView from './TodaysView';
import PlacesAutoComplete from './PlacesAutoComplete';
import DailyView from './DailyView';
import HighlightedCities from './HighlightedCities';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui grid">
          <div className="twelve wide column">
            <PlacesAutoComplete />
            <br />
            <br />
            <HighlightedCities />
          </div>
          <div className="three wide column">
            <TodaysView />
          </div>
        </div>
        <div className="five wide column">
          <DailyView />
        </div>
      </div>
    );
  }
}

export default App;
