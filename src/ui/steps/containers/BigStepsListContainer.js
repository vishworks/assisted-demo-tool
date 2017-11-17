import { connect } from 'react-redux';

import { gotoStep } from 'state/demos/actions.js';
import { getAllSteps, getCurrentStepIndex } from 'state/demos/selectors.js';

import BigStepsList from '../components/BigStepsList.js';

const mapStateToProps = state => {
  return {
    steps: getAllSteps(state),
    currentStepIndex: getCurrentStepIndex(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    gotoStep: stepIndex => {
      dispatch(gotoStep(stepIndex));
    }
  };
};

const BigStepsListContainer = connect(mapStateToProps, mapDispatchToProps)(
  BigStepsList
);

export default BigStepsListContainer;
