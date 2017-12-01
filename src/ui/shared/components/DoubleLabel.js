import React, { Component } from 'react';
import { omit } from 'lodash';

class DoubleLabel extends Component {
  render() {
    let { label, description, className } = this.props;
    let newClassName = 'DoubleLabel';
    if (className) {
      newClassName += ' ' + className;
    }
    return (
      <div
        {...omit(this.props, ['label', 'description', 'className'])}
        className={className}
      >
        <div className="DoubleLabel-label">{label}</div>
        <div className="DoubleLabel-description">{description}</div>
      </div>
    );
  }
}

export default DoubleLabel;
