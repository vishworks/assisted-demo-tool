import { connect } from 'react-redux'

import { prevStep, nextStep } from '../actions'

import { getCurrentStepIndex } from '../selectors'
import { getCurrentDemoStepsCount } from '../state/demos/selectors.js'


import StepsControlButtons from '../components/StepsControlButtons.js'




const mapStateToProps = state => {
  return {
    stepsCount: getCurrentDemoStepsCount(state),
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