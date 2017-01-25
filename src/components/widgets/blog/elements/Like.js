import React from 'react';
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
    // return (<div><p> { this.props.count } likes </p>
    //   <button className='uk-button uk-button-default'
    //     onClick = { this.handleClick }> Like this post </button>
    //   </div>);
    return (DOM.div({},
      DOM.p({}, `${this.props.count} likes`),
      DOM.button({
        className: 'uk-button uk-button-default',
        onClick: this.handleClick
      }, 'Like this post')
    ));
  }

}

Like.propTypes = {
  count: React.PropTypes.number,
  increaselikesHandler: React.PropTypes.func,
  id: React.PropTypes.number
};


export default Like;
