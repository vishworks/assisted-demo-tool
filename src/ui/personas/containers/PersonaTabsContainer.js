import { connect } from 'react-redux';
import { isFunction } from 'lodash';

import { getCurrentPersonaId } from 'state/personas/selectors.js';
import { getCurrentStepVisiblePersonas } from 'state/demos/selectors.js';

import { selectPersona } from 'state/personas/actions.js';

import PersonaTabs from '../components/PersonaTabs.js';

const mapStateToProps = state => {
  return {
    personas: getCurrentStepVisiblePersonas(state),
    currentPersonaId: getCurrentPersonaId(state)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    selectPersona: personaId => {
      dispatch(selectPersona(personaId));
      isFunction(ownProps.onClickPersona) && ownProps.onClickPersona(personaId);
    }
  };
};

const PersonaTabsContainer = connect(mapStateToProps, mapDispatchToProps)(
  PersonaTabs
);

export default PersonaTabsContainer;
