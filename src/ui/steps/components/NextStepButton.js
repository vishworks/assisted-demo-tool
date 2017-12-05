import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        <span className="button-label">NEXT</span>
        <i className="fa fa-arrow-right button-arrow" />
      </button>
    );
  }

  nextStep() {
    if (this.props.isLastStep === false) {
      this.props.nextStep();
    }
  }
}

NextStepButton.propTypes = {
  nextStep: PropTypes.func.isRequired,
  isLastStep: PropTypes.bool.isRequired
};

export default NextStepButton;
