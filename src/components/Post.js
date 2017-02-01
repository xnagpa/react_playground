import React, { PropTypes } from 'react';

import BlogItem from 'components/widgets/blog/BlogItem';

import { Item } from 'semantic-ui-react';

import { assign, pick } from 'lodash';

import request from 'superagent';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: {}
    };
  }

  fetchPost() {
    request.get(
      'http://localhost:3001' + this.props.location.pathname,
      {},
      (err, res) => this.setState ({ entry: res.body })
    );
  }

  componentDidMount() {
    this.fetchPost();
  }

  render() {
    return (React.createElement(Item.Group, {},
      React.createElement(BlogItem,
        assign({}, pick(this.state.entry,
          ['meta', 'image', 'likes', 'text', 'id']),
          {key: this.state.entry.id})
      )
    ));
  }
}

Post.propTypes = {
  params: PropTypes.object
};

export default Post;
