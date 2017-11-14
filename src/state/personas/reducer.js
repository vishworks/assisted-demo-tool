import { combineReducers } from 'redux';

import { LOAD_CONFIG } from '../config/types.js';

import { SELECT_PERSONA } from './types.js';

const personas = (state = [], action = {}) => {
  switch (action.type) {
    case LOAD_CONFIG:
      let newPersonas = action.payload.config.personas.slice();
      return Object.assign([], state, newPersonas);

    default:
      return state;
  }
};

const currentPersonaId = (state = '', action = {}) => {
  switch (action.type) {
    case LOAD_CONFIG:
      return action.payload.initialPersonaId;

    case SELECT_PERSONA:
      return action.payload.personaId;

    default:
      return state;
  }
};

const reducer = combineReducers({
  personas,
  currentPersonaId
});

export default reducer;
