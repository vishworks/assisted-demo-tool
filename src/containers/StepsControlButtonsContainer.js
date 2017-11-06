import { connect } from 'react-redux'

import { prevStep, nextStep } from '../actions'

import { getStepsCount, getCurrentStepIndex } from '../state/steps/localSelectors.js'


import StepsControlButtons from '../components/StepsControlButtons.js'




const mapStateToProps = state => {
  return {
    stepsCount: getStepsCount(state),
    currentStepIndex: getCurrentStepIndex(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    prevStep: () => {
      dispatch(prevStep());
    },
    nextStep: () => {
      dispatch(nextStep());
    }
  }
};

const StepsControlButtonsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StepsControlButtons);

export default StepsControlButtonsContainer