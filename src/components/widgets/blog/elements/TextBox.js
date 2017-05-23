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
    'font-family': 'times, Times New Roman, times-roman, georgia, serif'
  }}>{props.children}</p>
);

Span.propTypes = {
  children: PropTypes.string
};

Span.defaultProps = {
  children: 'Hello Jake!'
};

export default TextBox;
