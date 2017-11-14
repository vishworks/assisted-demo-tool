import { includes, map, get } from 'lodash'
import { selectPersona as setCurrentPersonaId } from './actions.js'
import { getPersonas, getCurrentPersonaId } from './selectors.js'

export function selectPersona(personaId) {

  return function (dispatch, getState) {

    var personas = getPersonas(getState());
    if (includes(map(personas, 'id'), personaId)) {
      dispatch(setCurrentPersonaId(personaId));
    } else {
      console.error('[selectPersona] : persona with id ' + personaId + ' not found');
      dispatch(setCurrentPersonaId(getCurrentPersonaId(getState()))); // abort
    }

  };
}