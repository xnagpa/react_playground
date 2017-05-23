import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import { bind } from 'lodash';

class Like extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = bind(this.handleClick, this);
  }

  handleClick() {
    this.props.increaseLikesHandler(this.props.id);
  }

  render() {
    return <div>
      <p>

      </p>
      <span onClick={ this.handleClick }>
        <Icon name='like' />
        {this.props.count || this.props.defaultLikeCount}
      </span>
    </div>;
  }

}

Like.propTypes = {
  count: PropTypes.number,
  increaseLikesHandler: PropTypes.func,
  defaultLikeCount: PropTypes.number,
  id: PropTypes.number
};


export default Like;
