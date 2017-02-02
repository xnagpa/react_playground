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
    const query = `http://localhost:3001${this.props.location.pathname}`;
    request.get(
      query,
      {},
      (err, res) => this.setState ({ entry: res.body })
    );
  }

  componentDidMount() {
    this.fetchPost();
  }

  render() {
    const parameters = assign({}, pick(this.state.entry,
                 ['meta', 'image', 'likes', 'text', 'id']),
                 {key: this.state.entry.id});
    return <Item.Group>
             <BlogItem {...parameters}/>
           </Item.Group>;
  }
}

Post.propTypes = {
  params: PropTypes.object
};

Post.propTypes = {
  params: PropTypes.object,
  location: PropTypes.object,
  pathname: PropTypes.string
};

export default Post;
