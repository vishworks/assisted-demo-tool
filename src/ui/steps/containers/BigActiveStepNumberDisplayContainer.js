import { connect } from 'react-redux';

import { gotoStep } from 'state/demos/actions.js';
import { getStepsCount, getCurrentStepNumber } from 'state/demos/selectors.js';

import BigActiveStepNumberDisplay from '../components/BigActiveStepNumberDisplay.js';

const mapStateToProps = state => {
  return {
    stepsCount: getStepsCount(state),
    stepNumber: getCurrentStepNumber(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    gotoStep: stepIndex => {
      dispatch(gotoStep(stepIndex));
    }
  };
};

const BigActiveStepNumberDisplayContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BigActiveStepNumberDisplay);

export default BigActiveStepNumberDisplayContainer;
