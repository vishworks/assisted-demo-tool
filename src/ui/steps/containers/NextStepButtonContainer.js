import { connect } from 'react-redux';

import { nextStep } from 'state/demos/actions.js';

import { getIsLastStep } from 'state/demos/selectors.js';

import NextStepButton from '../components/NextStepButton.js';

const mapStateToProps = state => {
  return {
    isLastStep: getIsLastStep(state)
  };
};

const mapDispatchToProps = dispatch => ({
  nextStep: () => dispatch(nextStep())
});

const NextStepButtonContainer = connect(mapStateToProps, mapDispatchToProps)(
  NextStepButton
);

export default NextStepButtonContainer;
