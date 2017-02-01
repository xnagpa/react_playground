import React from 'react';
import TextBox from './TextBox';
const MetaData = (props) => {
  const {
    author,
    updatedAt,
    createdAt
  } = props;
  return (React.createElement('div', {},
    author && React.createElement(TextBox, {},
      `${author.name}, ${author.age}`),
    updatedAt && React.createElement(TextBox, {},
      `Отредактировано ${updatedAt}`),
    createdAt && React.createElement(TextBox, {},
      `Создано ${createdAt}`)
  ));
};

MetaData.defaultProps = {
  author: {
    name: '',
    age: ''
  },
  updatedAt: '',
  createdAt: ''
};

MetaData.propTypes = {
  author: React.PropTypes.shape({
    name: React.PropTypes.string,
    age: React.PropTypes.string
  }),
  updatedAt: React.PropTypes.string,
  createdAt: React.PropTypes.string
};

export default MetaData;
