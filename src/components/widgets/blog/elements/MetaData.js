import React from 'react';
import TextBox from './TextBox';
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
  author: React.PropTypes.shape({
    name: React.PropTypes.string,
    age: React.PropTypes.string
  }),
  updatedAt: React.PropTypes.string,
  createdAt: React.PropTypes.string
};

export default MetaData;
