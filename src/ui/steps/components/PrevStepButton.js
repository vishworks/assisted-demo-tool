import React, { Component } from 'react';

import './PrevStepButton.css';

class PrevStepButton extends Component {
  constructor(props) {
    super(props);
    this.prevStep = this.prevStep.bind(this);
  }

  render() {
    return (
      <button
        className="PrevStepButton"
        onClick={this.prevStep}
        disabled={this.props.isFirstStep}
      >
        <i className="fa fa-arrow-left arrow" />
        <span className="label">BACK</span>
      </button>
    );
  }

  prevStep() {
    if (this.props.isFirstStep === false) {
      this.props.prevStep();
    }
  }
}

export default PrevStepButton;
