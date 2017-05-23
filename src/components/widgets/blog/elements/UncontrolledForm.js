import React, { Component } from 'react';
import { bind } from 'lodash';
import { assign, mapValues } from 'lodash/object';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class UncontrolledForm extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: {} };
    this.form = {};
    this.handleSubmitClick = bind(this.handleSubmitClick, this);
    this.generateRef = bind(this.generateRef , this);
  }

  handleSubmitClick(e) {
    e.preventDefault();
    this.setState({ errors: {} });
    const values = mapValues(this.form, 'value');

    if (!values.email || values.email.length < 3) {
      const err = assign(
        {},
        this.state,
        { errors: assign({}, this.state.errors, {email: true})}
      );
      this.setState(err);
    }

    console.log(JSON.stringify(values));
  }

  generateRef(field) {
    return ((input) => (this.form[field] = input));
  }

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.handleSubmitClick} >
          <Text
            label='Full name'
            name='fullName'
            fieldRef={ this.generateRef('fullName') }
            />
            <Text
              label='Email'
              name='email'
              error = { this.state.errors.email }
              fieldRef={ this.generateRef('email') }
              />
              <TextArea
                label='Message'
                name='message'
                fieldRef={ this.generateRef('message') }
                />
          <input type="submit" className="ui button primary" value="Submit" />
        </form>
      </div>
    );
  }
}

export default UncontrolledForm;

class Text extends React.Component {
  render() {
    const { label, name, fieldRef, error } = this.props;
    return (
      <div className={classNames('ui field', { error })}>
        <label htmlFor={ name }>{ label }</label>
        <input
          type='text'
          id={ name }
          className="ui input"
          name={ name }
          ref={ fieldRef }
          />
      </div>
    );
  }
}

class TextArea extends React.Component {
  render() {
    const { label, name, fieldRef } = this.props;
    return (
      <div className="ui field">
        <label htmlFor={ name }>{ label }</label>
        <textarea
          id={ name }
          className="ui input"
          name={ name }
          ref={ fieldRef }
          />
      </div>
    );
  }
}

TextArea.propTypes = {
  fieldRef: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string
};

Text.propTypes = {
  fieldRef: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
};
