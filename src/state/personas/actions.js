import { SELECT_PERSONA } from './types.js';

export { selectPersona } from './operations.js';

export const _selectPersona = personaId => ({
  type: SELECT_PERSONA,
  payload: {
    personaId: personaId
  }
});
