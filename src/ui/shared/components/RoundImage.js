import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './RoundImage.css';

class RoundImage extends Component {
  render() {
    return (
      <div
        className="RoundImage"
        style={{ backgroundImage: "url('" + this.props.imageUrl + "')" }}
        onClick={this.props.onClick}
      />
    );
  }
}

RoundImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default RoundImage;
