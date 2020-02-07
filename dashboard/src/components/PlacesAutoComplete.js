import React, { Component } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// import { geocodeByPlaceId } from 'react-google-places-autocomplete';
// If you want to use the provided css
import 'react-google-places-autocomplete/dist/assets/index.css';
import { connect } from 'react-redux';
import { searchPhrase, clickedSearch } from '../actions';

class PlacesAutoComplete extends Component {
  state = { term: '' };

  renderError = ({ error, touched }) => {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderButtonColor = () => {
    return (
      <button
        onClick={() =>
          this.state.term ? this.props.searchPhrase(this.state.term) : null
        }
        className="ui button green"
      >
        Search
      </button>
    );
  };
  render() {
    return (
      <div className="ui fluid action input">
        <GooglePlacesAutocomplete
          autocompletionRequest={{ types: ['(regions)'] }}
          onSelect={({ description }) => {
            this.setState({ term: description });
            this.props.searchPhrase(description);
            this.props.clickedSearch(description);
          }}
        />
        {this.renderButtonColor()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { term: state.term };
};

export default connect(mapStateToProps, { searchPhrase, clickedSearch })(
  PlacesAutoComplete
);
