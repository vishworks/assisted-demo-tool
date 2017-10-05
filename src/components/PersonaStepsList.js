import React, { Component } from 'react';

import { forEach } from 'lodash';

import PersonaStepsListItem from './PersonaStepsListItem.js'

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
        <PersonaStepsListItem
          step={step}
          active={this.props.currentStepIndex === step.index }
          onClick={(ev) => { this.props.gotoStep(step.index) }}
          />
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