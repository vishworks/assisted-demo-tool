

import { default as TYPE }  from './types.js'


export const selectPersona = (personaId) => {
  return {
    type: TYPE.SELECT_PERSONA,
    payload: {
      personaId: personaId
    }
  };
};