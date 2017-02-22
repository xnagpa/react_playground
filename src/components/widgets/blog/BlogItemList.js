import BlogItem from './BlogItem';
import { map } from 'lodash/collection';
import  React from 'react';

const BlogItemList = (props) => {
  const { items } = props;
  if (items.length == 0) {
    return null;
  }

  return <ul>
  { map(items, (entry) => (
    <BlogItem meta={entry.meta} image={entry.image} likes={entry.likes}
            text={entry.text} id={entry.id} key={entry.id}/>
  )) }
  </ul>;
};

BlogItemList.propTypes = {
  items: React.PropTypes.array
};

export default BlogItemList;
