import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

import BlogItem from 'components/widgets/blog/BlogItem';

import { Item } from 'semantic-ui-react';
import CommentsContainer from 'containers/CommentsContainer';

const Post = (props) => {
  return <div>
           <Item.Group>
            { props.item && <BlogItem {...props.item}/> }
           </Item.Group>
           <Item.Group>
            <CommentsContainer />
           </Item.Group>
            { props.item && <Helmet title = {props.item.text}/> }
         </div>;
};

Post.propTypes = {
  item: PropTypes.object
};

export default Post;
