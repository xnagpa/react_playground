import React from 'react';
import Image from './elements/Image';
import TextBox from './elements/TextBox';
import Like from './elements/Like';
import MetaData from './elements/MetaData';
import Link from 'components/elements/Link';
import { postsPath } from 'helpers/routes';

const BlogItem =  (props) => {
  const {
    meta,
    image,
    text,
    likes,
    increaselikesHandler,
    id
  } = props;

  return React.createElement('div', {},
    React.createElement(Image, {
      src: image.src
    }),
    React.createElement(Link, {to: postsPath(id)}, text),
    React.createElement(TextBox, {}, text),
    React.createElement(Like, {
      count: likes,
      increaselikesHandler,
      id
    }),
    meta && React.createElement(MetaData, {
      author: meta.author,
      updatedAt: meta.updatedAt,
      createdAt: meta.createdAt
    })
  );
};

BlogItem.defaultProps = {
  meta: MetaData.defaultProps,
  text: '',
  image: Image.defaultProps,
  likes: 0,
  id: 0
};

BlogItem.propTypes = {
  meta: React.PropTypes.shape(MetaData.propTypes),
  text: React.PropTypes.string,
  image: React.PropTypes.shape(Image.propTypes),
  likes: React.PropTypes.number,
  increaselikesHandler: React.PropTypes.func,
  id: React.PropTypes.number
};

export default BlogItem;
