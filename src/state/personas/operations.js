import { includes, map } from 'lodash';
import { _selectPersona } from './actions.js';
import { getPersonas, getCurrentPersonaId } from './selectors.js';

export function selectPersona(personaId) {
  return function(dispatch, getState) {
    var personas = getPersonas(getState());
    if (includes(map(personas, 'id'), personaId)) {
      dispatch(_selectPersona(personaId));
    } else {
      console.error(
        '[selectPersona] : persona with id ' + personaId + ' not found'
      );
      dispatch(_selectPersona(getCurrentPersonaId(getState()))); // abort
    }
  };
}
