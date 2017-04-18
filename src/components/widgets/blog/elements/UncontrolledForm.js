import React, { Component } from 'react';
import { bind } from 'lodash';
import { mapValues } from 'lodash/object';

class UncontrolledForm extends Component {
  constructor(props) {
    super(props);
    this.form = {};
    this.handleSubmitClick = bind(this.handleSubmitClick, this);
    this.generateRef = bind(this.generateRef , this);
  }

  handleSubmitClick(e) {
    e.preventDefault();
    const values = mapValues(this.form, 'value');
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
              fieldRef={ this.generateRef('email') }
              />
          <input type="submit" className="ui button primary" value="Submit" />
        </form>
      </div>
    );
  }
}

export default UncontrolledForm;

class Text extends React.Component {
  render(){
    const { label, name, fieldRef } = this.props;
    return (
      <div className="ui field">
        <label for={ name }>{ label }</label>
        <input
          id={ name }
          className="ui input"
          name={ name }
          ref={ fieldRef }
          />
      </div>
    );
  }
}
