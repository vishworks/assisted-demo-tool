import React, { Component } from 'react';

import PrevStepButtonContainer from 'ui/steps/containers/PrevStepButtonContainer.js';
import NextStepButtonContainer from 'ui/steps/containers/NextStepButtonContainer.js';

import './StepsControlButtons.css';

class StepsControlButtons extends Component {
  constructor(props) {
    super(props);
    this.prevStep = this.prevStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
  }

  render() {
    return (
      <div className="StepsControlButtons">
        <PrevStepButtonContainer />
        <NextStepButtonContainer />
      </div>
    );
  }

  prevStep() {
    if (this.props.isFirstStep === false) {
      this.props.prevStep();
    }
  }

  nextStep() {
    if (this.props.isLastStep === false) {
      this.props.nextStep();
    }
  }
}

export default StepsControlButtons;
