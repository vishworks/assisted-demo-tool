import React, { Component } from 'react';

import './NextStepButton.css';

class NextStepButton extends Component {
  constructor(props) {
    super(props);
    this.nextStep = this.nextStep.bind(this);
  }

  render() {
    return (
      <button
        className="NextStepButton"
        onClick={this.nextStep}
        disabled={this.props.isLastStep}
      >
        <span className="label">NEXT</span>
        <i className="fa fa-arrow-right arrow" />
      </button>
    );
  }

  nextStep() {
    if (this.props.isLastStep === false) {
      this.props.nextStep();
    }
  }
}

export default NextStepButton;
