import { reduce } from 'lodash';

import { LOAD_CONFIG } from '../config/types.js';
import { PUSH_PERSONA_URL, SET_CURRENT_URL } from './types.js';

const historyMap = (state = {}, action = {}) => {
  switch (action.type) {
    case LOAD_CONFIG:
      return reduce(
        action.payload.config.personas,
        (acc, persona) => {
          acc[persona.id] = {
            history: [persona.url],
            currentUrl: persona.url
          };
          return acc;
        },
        {}
      );

    case PUSH_PERSONA_URL: {
      const { personaId, url } = action.payload;
      return {
        ...state,
        [personaId]: {
          history: [...state[personaId].history, url],
          currentUrl: url
        }
      };
    }
    case SET_CURRENT_URL: {
      const { personaId, url } = action.payload;
      return {
        ...state,
        [personaId]: { ...state[personaId], currentUrl: url }
      };
    }
    default:
      return state;
  }
};

export default historyMap;
