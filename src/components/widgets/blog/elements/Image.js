import React from 'react';

class Image extends React.Component {
  render() {
    return React.createElement('img', {
      src: this.props.src
    });
  }
}


Image.propTypes = {
  src: React.PropTypes.string
};

Image.defaultProps = {
  src: ''
};

export default Image;
