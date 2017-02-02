import React from 'react';
import { Button } from 'semantic-ui-react';

import { bind } from 'lodash';

class Like extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = bind(this.handleClick, this);
  }

  handleClick() {
    this.props.increaselikesHandler(this.props.id);
  }

  render() {
    return <div>
      <p>
        {`${this.props.count} likes`}
      </p>
      <Button onClick={this.handleClick}> 'Like this post'</Button>
    </div>;
  }

}

Like.propTypes = {
  count: React.PropTypes.number,
  increaselikesHandler: React.PropTypes.func,
  id: React.PropTypes.number
};


export default Like;
