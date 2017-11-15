import React, { Component } from 'react';

class DoubleLabel extends Component {
  render() {
    let { label, description } = this.props;
    let className = ['DoubleLabel'];
    if (this.props.className) {
      className.push(this.props.className);
    }
    return (
      <div className={className.join(' ')}>
        <div className="DoubleLabel-label">{label}</div>
        <div className="DoubleLabel-description">{description}</div>
      </div>
    );
  }
}

export default DoubleLabel;
