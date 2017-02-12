import React from 'react';

const TextBox =  (props) => (
  <Span>{ props.children }</Span>
);

TextBox.propTypes = {
  children: React.PropTypes.string
};


const Span =  (props) => (
  <p style={{
    color: 'red'
  }}>{props.children}</p>
);

Span.propTypes = {
  children: React.PropTypes.string
};

Span.defaultProps = {
  children: 'Hello Jake!'
};

export default TextBox;
