import React from 'react';

const TextBox =  (props) => (
  React.createElement(Span, null, props.children)
);

TextBox.propTypes = {
  children: React.PropTypes.string
};


const Span =  (props) => (
  React.createElement('p', {
    style: {
      color: 'red'
    }
  },
    props.children)
);

Span.propTypes = {
  children: React.PropTypes.string
};

Span.defaultProps = {
  children: 'Hello Jake!'
};

export default TextBox;
