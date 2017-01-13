import React from 'react';

class TextBox extends React.Component {
  render() {
    return React.createElement(Span, null, this.props.children);
  }
}

TextBox.propTypes = {
  children: React.PropTypes.string
};


class Span extends React.Component {
  render() {
    return React.createElement('p', {
      style: {
        color: 'red'
      }
    },
      this.props.children);
  }
}

Span.propTypes = {
  children: React.PropTypes.string
};

Span.defaultProps = {
  children: 'Hello Jake!'
};

export default TextBox;
