import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import BlogItem from 'components/widgets/blog/BlogItem';

import { Item } from 'semantic-ui-react';
import CommentsContainer from 'containers/CommentsContainer';

const Post = (props) => (
   <div>
     <Item.Group>
      { props.item && <BlogItem {...props.item}/> }
     </Item.Group>
     <Item.Group>
      { props.item && <CommentsContainer id={props.item.id}/>}
     </Item.Group>
      { props.item && <Helmet title = {props.item.text}/> }
   </div>
);

Post.propTypes = {
  item: PropTypes.object
};

export default Post;
