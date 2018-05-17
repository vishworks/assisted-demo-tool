import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './NextStepButton.css';

class NextStepButton extends Component {
  constructor(props) {
    super(props);
    this.nextStep = this.nextStep.bind(this);
  }

  render() {
    const { isLastStep, nextDemoId } = this.props;
    const isLastDemo = !this.props.nextDemoId;
    const classNameAr = ['NextStepButton'];
    if (isLastStep) {
      classNameAr.push('last-step');
    }
    return (
      <button
        className={classNameAr.join(' ')}
        onClick={this.nextStep}
        disabled={isLastStep && isLastDemo}
      >
        <span className="button-label">
          NEXT {isLastStep && nextDemoId && 'DEMO'}
        </span>
        <i className="fa fa-arrow-right button-arrow" />
      </button>
    );
  }

  nextStep() {
    if (this.props.isLastStep === false) {
      this.props.nextStep();
    } else if (this.props.nextDemoId) {
      this.props.nextDemo();
    }
  }
}

NextStepButton.propTypes = {
  nextStep: PropTypes.func.isRequired,
  isLastStep: PropTypes.bool.isRequired
};

export default NextStepButton;
