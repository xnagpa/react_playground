import React, { Component } from 'react';
import { assign, set } from 'lodash/object';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class ControlledForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        values: {
          fullName: '',
          email: '',
          message: ''
        },
        errors: {}
      }
    };

    this.onSubmit =  this.onSubmit.bind(this);
  }

  onSubmit(e)  {
    e.preventDefault();
    console.log(JSON.stringify(this.state.form.values));
  }

  clearError(fieldName) {
    this.setState(set(
      assign({}, this.state),
      ['form', 'errors', fieldName],
      false
    ));
  }

  handleChange(fieldName) {
    return (e) => {
      switch (fieldName) {
        case 'email':
          this.clearError('email');
          if (e.target.value.length < 3)
            this.setState(set(
              assign({}, this.state),
              'form.errors.email',
              true
            ));
          break;
      }

      this.setState(set(
          assign({}, this.state),
          ['form','values', fieldName],
           e.target.value
        )
      );
    };
  }

  render () {
    const { fullName, email, message } = this.state.form.values;
    return (
      <div>
        <form onSubmit={this.onSubmit } className='ui form'>
          <Text name='fullName'
                label= 'Full Name'
                value= {fullName}
                onChange={this.handleChange('fullName')}
          />
          <Text name='email'
                label= 'Email'
                value= {email}
                error= {this.state.form.errors.email }
                onChange={this.handleChange('email')}
          />
          <TextArea
                name='message'
                label= 'Message'
                value= {message}
                onChange={this.handleChange('message')}
          />
          <input type='submit' value='Submit' className='ui button primary'/>
        </form>
      </div>
    );
  }
}

export default ControlledForm;

const Text = ({ name, value, onChange, label, error }) => (
  <div className={ classNames('ui field', { error  })}>
    <label htmlFor= { name }>{ label }</label>
    <input
      name = { name }
      id = { name }
      className="ui input"
      type="text"
      value={ value }
      onChange={ onChange }/>
  </div>
);


Text.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string
};


const TextArea = ({ name, value, onChange, label }) => (
  <div className="ui field">
    <label htmlFor= { name }>{ label }</label>
    <textarea
      name = { name }
      id = { name }
      className="ui input"
      value={ value }
      onChange={ onChange }/>
  </div>
);

TextArea.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string
};
