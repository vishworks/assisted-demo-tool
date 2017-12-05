import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        <i className="fa fa-arrow-left button-arrow" />
        <span className="button-label">BACK</span>
      </button>
    );
  }

  prevStep() {
    if (this.props.isFirstStep === false) {
      this.props.prevStep();
    }
  }
}

PrevStepButton.propTypes = {
  prevStep: PropTypes.func.isRequired,
  isFirstStep: PropTypes.bool.isRequired
};

export default PrevStepButton;
