import React, { PropTypes } from 'react';

import BlogItem from 'components/widgets/blog/BlogItem';

import { Item } from 'semantic-ui-react';

import { assign, pick } from 'lodash';

const Post = (props) => {
  let parameters = {};
  if (props.item) {
    parameters = assign({}, pick(props.item,
               ['meta', 'image', 'likes', 'text', 'id']),
               {key: props.item.id});
  }
  return <Item.Group>
          { props.item && <BlogItem {...parameters}/> }
         </Item.Group>;
};

Post.propTypes = {
  item: PropTypes.object
};

export default Post;
