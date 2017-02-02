import React from 'react';
import { Image as SemanticImage } from 'semantic-ui-react';

const Image =  (props) => (
  <SemanticImage src={props.src}/>
);


Image.propTypes = {
  src: React.PropTypes.string
};

Image.defaultProps = {
  src: ''
};

export default Image;
