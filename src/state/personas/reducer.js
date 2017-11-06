import { combineReducers } from 'redux'
import { get, find } from 'lodash'

import { parseCurrentHash } from '../../helpers/HashUtils.js'
import { TYPE as APP_TYPE } from '../../actions'

import { default as TYPE } from './types.js'




const personas = (state = [], action = {}) => {
  switch (action.type) {

    case APP_TYPE.LOAD_CONFIG:
      let newPersonas = action.payload.config.personas.slice();
      return Object.assign([], state, newPersonas );

    default:
      return state
  }
};


const currentPersonaId = (state = '', action = {}) => {

  switch (action.type) {
    case APP_TYPE.LOAD_CONFIG: {
      let personas = action.payload.config.personas,
        newHash = parseCurrentHash();
      if (find(personas, { id: newHash.personaId })) {
        return  newHash.personaId;
      }
      return get(personas, '0.id');
    }

    case TYPE.SELECT_PERSONA:
      if (find(action.meta.personas, { id: action.payload.personaId })) {
        return action.payload.personaId;
      }
      return state;

    case APP_TYPE.NEXT_STEP:
    case APP_TYPE.PREV_STEP:
    case APP_TYPE.GOTO_STEP:
      return action.meta.targetStep.personaId;


    default:
      return state
  }
};


const reducer = combineReducers({
  personas,
  currentPersonaId
});

export default reducer;