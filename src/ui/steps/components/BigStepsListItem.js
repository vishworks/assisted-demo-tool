import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './BigStepsList.css';

class BigStepsListItem extends Component {
  render() {
    let className = ['BigStepsListItem'];
    if (this.props.active) {
      className.push('active');
    }
    let { stepNumber, stepName, stepsCount } = this.props;
    return (
      <div className={className.join(' ')} onClick={this.props.onClick}>
        <div className="step-number">Step {stepNumber}</div>
        <div className="step-name">{stepName}</div>
        <div className="step-subtext">Total steps {stepsCount}</div>
      </div>
    );
  }
}

BigStepsListItem.propTypes = {
  active: PropTypes.bool.isRequired,
  stepNumber: PropTypes.number.isRequired,
  stepName: PropTypes.string.isRequired,
  stepsCount: PropTypes.number.isRequired
};

export default BigStepsListItem;
