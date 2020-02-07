import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHighlightedCity, searchPhrase, clickedSearch } from '../actions';

class HighlightedCities extends Component {
  componentDidMount() {
    this.props.fetchHighlightedCity();
  }

  renderRandomCities() {
    if (!this.props.highlightedCities) {
      return <div>Loading...</div>;
    }

    // For each page refresh, render random cities from db list
    let randomCities = [];

    // Render three random Cities
    for (let i = 0; randomCities.length < 3; i++) {
      // If the randomCities array is empty, push a new city info into array
      if (randomCities.length === 0) {
        let randomNumber = Math.floor(Math.random() * 39);
        randomCities.push(this.props.highlightedCities[randomNumber]);
        i++;
      }

      // If randomCities array isn't empty, make sure that we are not pushing a city already in said array
      if (randomCities.length > 0) {
        let randomNumber = Math.floor(Math.random() * 39);
        if (
          randomCities.every(
            city => city === this.props.highlightedCities[randomNumber]
          )
        ) {
          continue;
        } else {
          randomCities.push(this.props.highlightedCities[randomNumber]);
          i++;
        }
      }
    }

    // map through array and return JSX
    return randomCities.map((city, index) => (
      <div
        key={index}
        onClick={() => {
          this.props.searchPhrase(city.cityName);
          this.props.clickedSearch(city.cityName);
        }}
        className="column"
      >
        <div className="ui fluid card">
          <div className="image">
            <img
              style={{
                height: '300px',
                width: '100%'
              }}
              src={city.picture}
              alt={city.picture}
            />
          </div>
          <div style={{ textAlign: 'center' }} className="content">
            <a className="header">{city.cityName}</a>
          </div>
        </div>
        <br />
        <br />
      </div>
    ));
  }

  render() {
    return (
      <div className="ui four column grid">{this.renderRandomCities()}</div>
    );
  }
}

const mapStateToProps = state => {
  return {
    highlightedCities: state.fetchCities,
    searchTerm: state.searchPhrase
  };
};

export default connect(mapStateToProps, {
  fetchHighlightedCity,
  searchPhrase,
  clickedSearch
})(HighlightedCities);
