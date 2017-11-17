import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './BigActiveStepNumberDisplay.css';

class BigActiveStepNumberDisplay extends Component {
  render() {
    let { stepNumber, stepsCount } = this.props;
    return (
      <div className="BigActiveStepNumberDisplay">
        <div className="display-header">Active step</div>
        <div className="display-subtext">
          Step {stepNumber}/{stepsCount}
        </div>
      </div>
    );
  }
}

BigActiveStepNumberDisplay.propTypes = {
  currentStepNumber: PropTypes.number.isRequired,
  stepsCount: PropTypes.number.isRequired
};

export default BigActiveStepNumberDisplay;
