import { connect } from 'react-redux'

import { gotoStep } from '../actions'
import { getCurrentPersonaSteps, getCurrentStepIndex } from '../selectors'


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