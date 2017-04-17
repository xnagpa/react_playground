import React from 'react';
import { Button } from 'semantic-ui-react';

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
        {`${this.props.count || this.props.defaultLikeCount} likes`}
      </p>
      <Button onClick={ this.handleClick }> 'Like this post'</Button>
    </div>;
  }

}

Like.propTypes = {
  count: React.PropTypes.number,
  increaseLikesHandler: React.PropTypes.func,
  id: React.PropTypes.number
};


export default Like;
