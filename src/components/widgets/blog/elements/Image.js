import React from 'react';
import { Image as SemanticImage } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Image =  (props) => (
  <SemanticImage src={props.src}/>
);


Image.propTypes = {
  src: PropTypes.string
};

Image.defaultProps = {
  src: ''
};

export default Image;
