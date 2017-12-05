import React, { Component } from 'react';

import CurrentStepNumberContainer from '../containers/CurrentStepNumberContainer.js';
import StepsCountContainer from '../containers/StepsCountContainer.js';

import './StepLabel.css';

class StepLabel extends Component {
  render() {
    return (
      <div className="StepLabel">
        Step <CurrentStepNumberContainer />/<StepsCountContainer />
      </div>
    );
  }
}

export default StepLabel;
