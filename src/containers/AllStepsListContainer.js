import { connect } from 'react-redux'

import { gotoStep } from '../actions'
import { getAllSteps, getCurrentStepIndex } from '../selectors'


import PersonaStepsList from '../components/PersonaStepsList.js'



const mapStateToProps = state => {
  return {
    steps: getAllSteps(state),
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

const AllStepsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonaStepsList);

export default AllStepsListContainer