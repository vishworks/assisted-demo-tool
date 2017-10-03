import React, { Component } from 'react';

import { forEach } from 'lodash';

import './PersonaStepsList.css'


class PersonaStepsList extends Component {


  constructor(props) {
    super(props);

  }


  render() {

    let className = ['PersonaStepsList'];

    let renderers = [];
    forEach(this.props.steps, (step, i) => {
      renderers.push(
        <div>
          <div>Step {i}</div>
          <div>{step.name}</div>
          <div>Step # {step.index} of {this.props.steps.length} { this.props.currentStepIndex === step.index ? 'ACTIVE' : '' }</div>
        </div>
      );
    });


    return (
      <div
        className={className.join(' ')}
        >
        {renderers}
      </div>
    );
  }


}

export default PersonaStepsList;