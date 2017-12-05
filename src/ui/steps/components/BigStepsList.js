import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';

import BigStepsListItem from './BigStepsListItem.js';

import './BigStepsList.css';

class BigStepsList extends Component {
  render() {
    let { steps, currentStepIndex, gotoStep } = this.props;
    return (
      <div className="BigStepsList">
        {map(steps, step => (
          <BigStepsListItem
            key={step.index + ''}
            active={currentStepIndex === step.index}
            stepNumber={step.index + 1}
            stepTitle={step.title}
            onClick={ev => gotoStep(step.index)}
          />
        ))}
      </div>
    );
  }
}

const StepPropType = PropTypes.shape({
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
});

BigStepsList.propTypes = {
  steps: PropTypes.arrayOf(StepPropType).isRequired,
  currentStepIndex: PropTypes.number.isRequired,
  gotoStep: PropTypes.func.isRequired
};

export default BigStepsList;
