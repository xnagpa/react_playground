import React from 'react';
import { Button } from 'semantic-ui-react'

import _ from 'lodash';
const { DOM } = React;

class Like extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = _.bind(this.handleClick, this);
  }

  handleClick() {
    this.props.increaselikesHandler(this.props.id);
  }

  render() {
    return (DOM.div({},
      DOM.p({}, `${this.props.count} likes`),
      React.createElement(Button, {onClick: this.handleClick}, 'Like this post')
    ));
  }

}

Like.propTypes = {
  count: React.PropTypes.number,
  increaselikesHandler: React.PropTypes.func,
  id: React.PropTypes.number
};


export default Like;
