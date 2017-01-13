import React from 'react';
import Image from './elements/Image';
import TextBox from './elements/TextBox';
import Like from './elements/Like';
import MetaData from './elements/MetaData';

class Item extends React.Component {
  render() {
    const {
      meta,
      image,
      text,
      likes,
      increaselikesHandler,
      id
    } = this.props;
    return React.createElement('div', {},
      React.createElement(Image, {
        src: image.src
      }),
      React.createElement(TextBox, {}, text),
      React.createElement(Like, {
        count: likes,
        increaselikesHandler: increaselikesHandler,
        id: id
      }),
      meta && React.createElement(MetaData, {
        author: meta.author,
        updatedAt: meta.updatedAt,
        createdAt: meta.createdAt
      })
    );
  }
}

Item.defaultProps = {
  author: {
    name: '',
    age: ''
  },
  text: '',
  image: {
    width: 0,
    height: 0,
    url: ''
  },
  updatedAt: '',
  createdAt: '',
  likes: 0
};

Item.propTypes = {
  meta: MetaData.propTypes,
  text: React.PropTypes.string,
  image: Image.propTypes,
  likes: React.PropTypes.number
};

export default Item;
