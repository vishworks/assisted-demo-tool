import React, { Component } from 'react';

import './StepsControlButtons.css'

class StepsControlButtons extends Component {


  constructor(props) {
    super(props);
    this.prevStep = this.prevStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
  }

  render() {

    let className = ['StepsControlButtons'];

    return (
      <div className={className.join(' ')}>
        <button className="back-btn"
                onClick={this.prevStep}
                disabled={this.props.currentStepIndex === 0}
          >
          <i className="fa fa-arrow-left arrow" />
          <span className="label">BACK</span>
        </button>
        <button className="next-btn"
                onClick={this.nextStep}
                disabled={this.props.currentStepIndex >= this.props.stepsCount -1}
          >
          <span className="label">NEXT</span>
          <i className="fa fa-arrow-right arrow" />
        </button>
      </div>
    );
  }


  prevStep() {
  //  if (this.props.currentStepIndex > 0) {
      this.props.prevStep();
  //  }
  }


  nextStep() {
   // if (this.props.currentStepIndex < this.props.stepsCount) {
      this.props.nextStep();
  //  }
  }

}

export default StepsControlButtons;