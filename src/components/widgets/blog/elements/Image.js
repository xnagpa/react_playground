import React from 'react';

const Image =  (props) => (
  React.createElement('img', {
    src: props.src
  })
);


Image.propTypes = {
  src: React.PropTypes.string
};

Image.defaultProps = {
  src: ''
};

export default Image;
