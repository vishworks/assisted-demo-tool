import React, { Component } from 'react';

class PersonaStepsListItem extends Component {
  render() {
    let className = ['PersonaStepsListItem'];
    if (this.props.active) {
      className.push('active');
    }
    let step = this.props.step;
    return (
      <div className={className.join(' ')} onClick={this.props.onClick}>
        <div>Step {step.index + 1}</div>
        <div>{step.title}</div>
      </div>
    );
  }
}

export default PersonaStepsListItem;
