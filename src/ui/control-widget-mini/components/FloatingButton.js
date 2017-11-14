import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './FloatingButton.css';

class FloatingButton extends Component {
  render() {
    let className = ['FloatingButton'];
    if (this.props.className) {
      className.push(this.props.className);
    }
    return (
      <div className={className.join(' ')} onClick={this.props.onClick}>
        <i className={this.props.iconClassName} />
      </div>
    );
  }
}

FloatingButton.propTypes = {
  iconClassName: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default FloatingButton;
