import React from 'react';
import { Image as SemanticImage } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Image =  (props) => (
  <SemanticImage
    src={props.src}
    size={props.size}
    shape={props.shape}
    spaced={props.spaced}
  />
);


Image.propTypes = {
  src: PropTypes.string,
  size: PropTypes.string,
  shape: PropTypes.string,
  spaced: PropTypes.string
};

Image.defaultProps = {
  src: ''
};

export default Image;
