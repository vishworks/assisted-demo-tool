import React, { Component } from 'react';

import RoundImage from 'ui/shared/components/RoundImage.js';

import './LabelledAvatar.css';

class LabelledAvatar extends Component {
  render() {
    let className = ['LabelledAvatar'];

    let { imageUrl, label, description } = this.props;

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
