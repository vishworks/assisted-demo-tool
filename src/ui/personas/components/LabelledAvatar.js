import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RoundImage from 'ui/shared/components/RoundImage.js';

import './LabelledAvatar.css';

class LabelledAvatar extends Component {
  render() {
    let { imageUrl, label, shortDesc, active } = this.props;

    let className = ['LabelledAvatar'];
    if (active) {
      className.push('active');
    }

    return (
      <div className={className.join(' ')} onClick={this.props.onClick}>
        <div className="persona-wrapper">
          <RoundImage imageUrl={imageUrl} />
        </div>
        <div className="persona-label">{label}</div>
        <div className="persona-description">{shortDesc}</div>
      </div>
    );
  }
}

LabelledAvatar.propTypes = {
  onClick: PropTypes.func,
  imageUrl: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  shortDesc: PropTypes.string.isRequired,
  active: PropTypes.bool
};

export default LabelledAvatar;
