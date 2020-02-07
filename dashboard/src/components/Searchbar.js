import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { searchPhrase } from '../actions/index';
import { connect } from 'react-redux';

class SearchBar extends Component {
  renderError = ({ error, touched }) => {
    if (error && touched) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderButtonColor = ({ error, touched }) => {
    if (error && touched) {
      return <button className="ui button red">Search</button>;
    }

    return <button className="ui button green">Search</button>;
  };

  renderInput = ({ label, input, meta }) => {
    return (
      <div>
        <div className="ui fluid action input">
          <input {...input} autoComplete="off" />
          {this.renderButtonColor(meta)}
        </div>
        <label>{label}</label>
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.searchPhrase(formValues.searchFieldSubmission);
    // this.props.reset();
    // this.props.meta.visited();`
    // console.log(this.props.meta);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui container"
      >
        <Field
          name="searchFieldSubmission"
          label="Zipcode | City Search"
          component={this.renderInput}
        />
      </form>
    );
  }
}

const validate = formValues => {
  const error = {};

  if (!formValues.searchFieldSubmission) {
    error.searchFieldSubmission = 'Please enter a zipcode or city';
  }

  return error;
};

const formWrapped = reduxForm({
  form: 'submittedSearch',
  validate
})(SearchBar);

export default connect(null, { searchPhrase })(formWrapped);
