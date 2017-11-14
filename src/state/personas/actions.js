import { SELECT_PERSONA } from './types.js';

export const selectPersona = personaId => ({
  type: SELECT_PERSONA,
  payload: {
    personaId: personaId
  }
});
