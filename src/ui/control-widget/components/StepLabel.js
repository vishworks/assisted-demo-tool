import React, { Component } from 'react';

import './StepLabel.css';

class StepLabel extends Component {
  render() {
    let className = ['StepLabel'];

    return (
      <div className={className.join(' ')}>
        Step {this.props.stepIndex + 1}/{this.props.stepsCount}
      </div>
    );
  }
}

export default StepLabel;
