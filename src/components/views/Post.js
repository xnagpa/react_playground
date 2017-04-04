import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

import BlogItem from 'components/widgets/blog/BlogItem';

import { Item } from 'semantic-ui-react';

const Post = (props) => (
  <div>
    <Item.Group>
      { props.item && <BlogItem {...props.item}/> }
    </Item.Group>
    { props.item && <Helmet title= { props.item.title }/>}
  </div>
);

Post.propTypes = {
  item: PropTypes.object
};

export default Post;
