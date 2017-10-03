import { connect } from 'react-redux'

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
  //  selectPersona: (personaId) => {
  //    dispatch(selectPersona(personaId));
  //  }
  }
};

const PersonaStepsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonaStepsList);

export default PersonaStepsListContainer