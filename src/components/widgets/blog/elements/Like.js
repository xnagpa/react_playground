import React from 'react';
import _ from 'lodash';

class Like extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = _.bind(this.handleClick, this);
  }

  handleClick() {
    this.props.increaselikesHandler(this.props.id);
  }

  render() {
    return ( <div><p> { this.props.count } likes </p>
      <button onClick = { this.handleClick }> Like this post </button>
      </div> );
  }

}

export default Like;
