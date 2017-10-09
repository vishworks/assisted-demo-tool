import { connect } from 'react-redux'

import { getCurrentPersona, getVisibleNotSelectedPersonas } from '../selectors'

import { selectPersona } from '../actions'
import PersonaDropdown from '../components/PersonaDropdown.js'




const mapStateToProps = state => {
  return {
    personas: getVisibleNotSelectedPersonas(state),
    currentPersona: getCurrentPersona(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    selectPersona: (personaId) => {
      dispatch(selectPersona(personaId));
    }
  }
};

const PersonaDropdownContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonaDropdown);

export default PersonaDropdownContainer