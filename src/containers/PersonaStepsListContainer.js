import { connect } from 'react-redux'

import { gotoStep } from '../state/steps/operations.js'
import { getCurrentPersonaSteps } from '../selectors'
import { getCurrentStepIndex } from '../state/steps/localSelectors.js'


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