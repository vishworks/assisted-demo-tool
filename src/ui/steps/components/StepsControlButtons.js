import React, { Component } from 'react';

import PrevStepButtonContainer from 'ui/steps/containers/PrevStepButtonContainer.js';
import NextStepButtonContainer from 'ui/steps/containers/NextStepButtonContainer.js';

import './StepsControlButtons.css';

class StepsControlButtons extends Component {
  render() {
    return (
      <div className="StepsControlButtons">
        <PrevStepButtonContainer />
        <NextStepButtonContainer />
      </div>
    );
  }
}

export default StepsControlButtons;
