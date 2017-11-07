import { combineReducers } from 'redux'
import { get, find } from 'lodash'
import { parseCurrentHash } from '../../helpers/HashUtils.js'

import { TYPE as APP_TYPE } from '../../actions'

import { default as TYPE } from './types.js'




const steps = (state = [], action = {}) => {
  switch (action.type) {

    case APP_TYPE.LOAD_CONFIG:
      let newSteps = action.payload.config.demos[0].steps.slice();
      return Object.assign([], state, newSteps );

    default:
      return state
  }
};


const currentStepIndex = (state = 0, action = {}) => {

  switch (action.type) {

    case APP_TYPE.LOAD_CONFIG: {
      let newHash = parseCurrentHash();
      return (newHash.stepNumber && parseInt(newHash.stepNumber, 10) - 1) || 0;
    }

    case TYPE.GOTO_STEP:
      return action.payload.stepIndex;

    default:
      return state
  }
};


const reducer = combineReducers({
  steps,
  currentStepIndex
});

export default reducer;