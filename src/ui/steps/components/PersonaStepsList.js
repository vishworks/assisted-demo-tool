import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { forEach } from 'lodash';

import PersonaStepsListItem from './PersonaStepsListItem.js';

import './PersonaStepsList.css';

class PersonaStepsList extends Component {
  render() {
    let className = ['PersonaStepsList'];

    let renderers = [];
    forEach(this.props.steps, (step, i) => {
      renderers.push(
        <PersonaStepsListItem
          key={step.index + ''}
          stepNumber={step.number}
          stepTitle={step.title}
          active={this.props.currentStepIndex === step.index}
          onClick={ev => {
            this.props.gotoStep(step.index);
          }}
        />
      );
    });

    if (renderers.length === 0) {
      renderers = <div className="info-message">No steps</div>;
    }

    return <div className={className.join(' ')}>{renderers}</div>;
  }
}

const StepPropTypes = PropTypes.shape({
  index: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
});
PersonaStepsList.propTypes = {
  currentStepIndex: PropTypes.number.isRequired,
  steps: PropTypes.arrayOf(StepPropTypes).isRequired
};

export default PersonaStepsList;
