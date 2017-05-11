import React from 'react';
import TextBox from './TextBox';
import PropTypes from 'prop-types';
const MetaData = (props) => {
  const {
    author,
    updatedAt,
    createdAt
  } = props;
  return (
    <div>
      { author && <TextBox>{`${author.name}, ${author.age}`}</TextBox> }
      { updatedAt && <TextBox>{`Отредактировано ${updatedAt}`}</TextBox> }
      { createdAt && <TextBox>{`Создано ${createdAt}`}</TextBox> }
    </div>
  );
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
  author: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.string
  }),
  updatedAt: PropTypes.string,
  createdAt: PropTypes.string
};

export default MetaData;
