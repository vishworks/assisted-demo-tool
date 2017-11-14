import { connect } from 'react-redux'

import { gotoStep } from '../state/demos/operations.js'
import { getCurrentStepIndex, getCurrentPersonaSteps } from '../state/demos/selectors.js'


import PersonaStepsList from '../components/PersonaStepsList.js'




const mapStateToProps = state => {
  return {
    steps: getCurrentPersonaSteps(state),
    currentStepIndex: getCurrentStepIndex(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    gotoStep: (stepIndex) => {
      dispatch(gotoStep(stepIndex));
    }
  }
};

const PersonaStepsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonaStepsList);

export default PersonaStepsListContainer
