import React, { PropTypes } from 'react';

import { entries } from 'constants/static/entries';

import BlogItem from 'components/widgets/blog/BlogItem';

import { Item } from 'semantic-ui-react';

import { assign, pick } from 'lodash';

const Post = ({ params }) => {
  props = entries[params.id];
  return (<Item.Group>
    React.createElement(BlogItem,
      assign({}, pick(entry, ['meta', 'image', 'likes', 'text', 'id']),
        {increaselikesHandler: props.increaseLikesHandler, key: entry.id,})
    ))))
  </Item.Group>);
};

Post.propTypes = {
  params: PropTypes.object
};

export default Post;
