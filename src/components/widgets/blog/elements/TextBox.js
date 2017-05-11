import React from 'react';
import PropTypes from 'prop-types';

const TextBox =  (props) => (
  <Span>{ props.children }</Span>
);

TextBox.propTypes = {
  children: PropTypes.string
};


const Span =  (props) => (
  <p style={{
    color: 'red'
  }}>{props.children}</p>
);

Span.propTypes = {
  children: PropTypes.string
};

Span.defaultProps = {
  children: 'Hello Jake!'
};

export default TextBox;
