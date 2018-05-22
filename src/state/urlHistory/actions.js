import { PUSH_PERSONA_URL, SET_CURRENT_URL } from './types.js';

export { gotoNextUrl, gotoPrevUrl } from './operations.js';

export const pushPersonaUrl = (personaId, url) => ({
  type: PUSH_PERSONA_URL,
  payload: {
    personaId,
    url
  }
});

export const setCurrentUrl = (personaId, url) => ({
  type: SET_CURRENT_URL,
  payload: {
    personaId,
    url
  }
});
