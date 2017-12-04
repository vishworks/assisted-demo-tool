import React, { Component } from 'react';

import RoundImage from 'ui/shared/components/RoundImage.js';

import './LabelledAvatar.css';

class LabelledAvatar extends Component {
  render() {
    let { imageUrl, label, description, active } = this.props;

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
        <div className="persona-description">{description}</div>
      </div>
    );
  }
}

export default LabelledAvatar;
