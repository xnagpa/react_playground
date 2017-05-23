import React, { Component } from 'react';
import { assign, set } from 'lodash/object';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        values: {
          text: '',
          phone: ''
        },
        errors: {}
      }
    };
    this.onSubmit =  this.onSubmit.bind(this);
  }

  onSubmit(e)  {
    e.preventDefault();
    this.props.createCommentHandler(this.state.form.values);
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
        case 'phone':
          this.clearError('phone');
          if (!e.target.value.match(/^\+\d\(\d\d\d\)-\d\d\d-\d\d-\d\d$/))
            this.setState(set(
              assign({}, this.state),
              'form.errors.phone',
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
    const { text, phone } = this.state.form.values;
    return (
      <div>
        <form onSubmit={this.onSubmit } className='ui form'>
          <TextArea name='text'
                label= 'Comment text'
                value= {text}
                onChange={this.handleChange('text')}
          />
          <Text name='phone'
                label= 'Phone'
                value= {phone}
                error= {this.state.form.errors.phone }
                onChange={this.handleChange('phone')}
          />

          <input type='submit' value='Submit' className='ui button primary'/>
        </form>
      </div>
    );
  }
}

export default CommentForm;

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


Text.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string
};

TextArea.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string
};

CommentForm.propTypes = {
  createCommentHandler: PropTypes.func
};
