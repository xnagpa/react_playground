import React, { PropTypes } from 'react';

import BlogItem from 'components/widgets/blog/BlogItem';

import { Item } from 'semantic-ui-react';

const Post = (props) => {
  return <Item.Group>
          { props.item && <BlogItem {...props.item}/> }
         </Item.Group>;
};

Post.propTypes = {
  item: PropTypes.object
};

export default Post;