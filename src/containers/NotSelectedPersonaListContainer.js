import { connect } from 'react-redux'

import { getCurrentPersona, getVisibleNotSelectedPersonas } from '../selectors'

import { selectPersona } from '../actions'
import PersonaList from '../components/PersonaList.js'




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

const NotSelectedPersonaListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonaList);

export default NotSelectedPersonaListContainer