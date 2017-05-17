import BlogItem from './BlogItem';
import { map } from 'lodash/collection';
import  React from 'react';
import PropTypes from 'prop-types';

const BlogItemList = (props) => {
  const { items } = props;
  if (items.length == 0) {
    return null;
  }

  return <ul>
  { map(items, (entry) => (
    <BlogItem meta={entry.meta} image={entry.image} likes={entry.likes}
            text={entry.text} id={entry.id} key={entry.id}
            increaseLikesHandler={props.increaseLikesHandler}
            editPath={entry.editPath}/>
  )) }
  </ul>;
};

BlogItemList.propTypes = {
  items: PropTypes.array
};

export default BlogItemList;
