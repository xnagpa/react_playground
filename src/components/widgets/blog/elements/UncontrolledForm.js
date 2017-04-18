import React, { Component } from 'react';
import { bind } from 'lodash';

class UncontrolledForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitClick = bind(this.handleSubmitClick, this);
  }

  handleSubmitClick() {
    console.log(this._name.value);
  }

  render() {
    return (
      <div>
        <input type="text" ref={ input => this._name = input} />
        <button onClick={this.handleSubmitClick}>Submit</button>
      </div>
    );
  }
}

export default UncontrolledForm;
