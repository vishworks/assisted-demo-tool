import { connect } from 'react-redux'
import { isFunction } from 'lodash'

import { getCurrentPersona, getVisiblePersonas } from '../selectors'

import { selectPersona } from '../actions'
import PersonaList from '../components/PersonaList.js'




const mapStateToProps = state => {
  return {
    personas: getVisiblePersonas(state),
    currentPersona: getCurrentPersona(state)
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    selectPersona: (personaId) => {
      dispatch(selectPersona(personaId));
      isFunction(ownProps.onClickPersona) && ownProps.onClickPersona(personaId);
    }
  }
};

const PersonaListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonaList);

export default PersonaListContainer