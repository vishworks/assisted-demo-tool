import { connect } from 'react-redux';

import { nextStep } from 'state/demos/actions.js';
import { nextDemo } from 'state/demos/operations.js';

import { getIsLastStep, getNextDemoId } from 'state/demos/selectors.js';

import NextStepButton from '../components/NextStepButton.js';

const mapStateToProps = state => {
  return {
    isLastStep: getIsLastStep(state),
    nextDemoId: getNextDemoId(state)
  };
};

const mapDispatchToProps = dispatch => ({
  nextStep: () => dispatch(nextStep()),
  nextDemo: () => dispatch(nextDemo())
});

const NextStepButtonContainer = connect(mapStateToProps, mapDispatchToProps)(
  NextStepButton
);

export default NextStepButtonContainer;
