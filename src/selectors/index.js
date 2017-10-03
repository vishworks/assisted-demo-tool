import { memoize, find, filter } from 'lodash'


/**
 * Memoized private functions
 */
const _getPersonaById = memoize((personaId, state) => {
  return find(state.configuration.personas, { name: personaId });
});

const _getNotSelectedPersonas = memoize((curPersonaId, state) => {
  return filter(state.configuration.personas, (persona) => { return persona.name !== curPersonaId });
});


/**
 * Exports
 */

export const selectCurrentPersona = (state) => {
  return _getPersonaById(state.viewPort.currentPersona, state);
};


export const getNotSelectedPersonas = (state) => {
  return _getNotSelectedPersonas(state.viewPort.currentPersona, state);
};