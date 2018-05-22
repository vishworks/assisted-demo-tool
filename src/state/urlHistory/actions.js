import { PUSH_PERSONA_URL, SET_CURRENT_URL_INDEX } from './types.js';

export { gotoNextUrl, gotoPrevUrl } from './operations.js';

export const pushPersonaUrl = (personaId, url) => ({
  type: PUSH_PERSONA_URL,
  payload: {
    personaId,
    url
  }
});

export const setCurrentUrlIndex = (personaId, urlIndex) => ({
  type: SET_CURRENT_URL_INDEX,
  payload: {
    personaId,
    urlIndex
  }
});
