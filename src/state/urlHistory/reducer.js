import { reduce, find, get } from 'lodash';

import { LOAD_CONFIG } from '../config/types.js';
import { PUSH_PERSONA_URL, SET_CURRENT_URL_INDEX } from './types.js';

const historyMap = (state = {}, action = {}) => {
  switch (action.type) {
    case LOAD_CONFIG:
      const { config, initialDemoId, initialStepIndex } = action.payload;
      return reduce(
        config.personas,
        (acc, persona) => {
          const demo = find(config.demos, { id: initialDemoId });
          const step = get(demo, `steps.${initialStepIndex}`, {});
          const urlOverride = find(step.urlOverrides, {
            personaId: persona.id
          });
          if (urlOverride) {
            acc[persona.id] = {
              history: [persona.url, urlOverride.url],
              currentUrlIndex: 1
            };
          } else {
            acc[persona.id] = {
              history: [persona.url],
              currentUrlIndex: 0
            };
          }
          return acc;
        },
        {}
      );

    case PUSH_PERSONA_URL: {
      const { personaId, url } = action.payload;
      const newItem = { ...state[personaId] };
      newItem.history = [...newItem.history, url];
      newItem.currentUrlIndex = newItem.history.length - 1;
      return {
        ...state,
        [personaId]: newItem
      };
    }
    case SET_CURRENT_URL_INDEX: {
      const { personaId, urlIndex } = action.payload;
      return {
        ...state,
        [personaId]: { ...state[personaId], currentUrlIndex: urlIndex }
      };
    }
    default:
      return state;
  }
};

export default historyMap;
