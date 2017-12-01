import React, { Component } from 'react';
import { omit } from 'lodash';
import PropTypes from 'prop-types';

import './RoundImage.css';

class RoundImage extends Component {
  render() {
    const { className, style, imageUrl } = this.props;
    let newClassName = 'RoundImage';
    if (className) {
      newClassName += ' ' + className;
    }
    let newStyle = Object.assign({}, style);
    newStyle.backgroundImage = "url('" + imageUrl + "')";

    return (
      <div
        {...omit(this.props, ['className', 'style', 'imageUrl'])}
        className={newClassName}
        style={newStyle}
      />
    );
  }
}

RoundImage.propTypes = {
  imageUrl: PropTypes.string.isRequired
};

export default RoundImage;
