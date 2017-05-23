import React from 'react';
import { Image as SemanticImage } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Image =  (props) => (
  <SemanticImage
    src={props.src}
    size={props.size}
    rounded={props.rounded}
    spaced={props.spaced}
  />
);


Image.propTypes = {
  src: PropTypes.string,
  size: PropTypes.string,
  rounded: PropTypes.boolean,
  spaced: PropTypes.string
};

Image.defaultProps = {
  src: ''
};

export default Image;
