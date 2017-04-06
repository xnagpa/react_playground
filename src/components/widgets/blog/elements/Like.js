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

  componentWillReceiveProps(nextProps) {
    //nextProps не изменяется
    // console.log(`Will receive props ${this.props != nextProps}`);
    // console.log(`this.props id ${this.props.id} count ${this.props.count} handler=${this.props.increaseLikesHandler}`);
    // console.log(`this.props id ${nextProps.id} count ${nextProps.count} handler=${nextProps.increaseLikesHandler}`);
  }

  componentDidMount() {
    console.log(`Component did mount`);
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
  increaseLikesHandler: React.PropTypes.func,
  id: React.PropTypes.number
};


export default Like;
