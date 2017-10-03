import React, { Component } from 'react';


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
        <button onClick={this.prevStep}>PREV</button><button onClick={this.nextStep}>NEXT</button>
      </div>
    );
  }


  prevStep() {
    if (this.props.currentStepIndex > 0) {
      this.props.prevStep();
    }
  }


  nextStep() {
    if (this.props.currentStepIndex < this.props.stepsCount) {
      this.props.nextStep();
    }
  }

}

export default StepsControlButtons;