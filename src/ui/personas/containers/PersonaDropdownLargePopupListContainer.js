import { connect } from 'react-redux';
import { isFunction } from 'lodash';

import { getVisibleNotSelectedPersonas } from 'state/personas/selectors.js';

import { selectPersona } from 'state/personas/actions.js';

import PersonaDropdownLargePopupList from '../components/PersonaDropdownLargePopupList.js';

const mapStateToProps = state => {
  return {
    personas: getVisibleNotSelectedPersonas(state)
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

const PersonaDropdownLargePopupListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonaDropdownLargePopupList);

export default PersonaDropdownLargePopupListContainer;
