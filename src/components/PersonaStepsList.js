import React, { Component } from 'react';

import { forEach } from 'lodash';

import PersonaStepsListItem from './PersonaStepsListItem.js'

import './PersonaStepsList.css'


class PersonaStepsList extends Component {

  render() {

    let className = ['PersonaStepsList'];

    let renderers = [];
    forEach(this.props.steps, (step, i) => {
      renderers.push(
        <PersonaStepsListItem
          key={step.index}
          step={step}
          active={this.props.currentStepIndex === step.index }
          onClick={(ev) => { this.props.gotoStep(step.index) }}
          />
      );
    });

    if (renderers.length === 0) {
      renderers.push(<div className="info-message">There are no steps for this persona</div>);
    }


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