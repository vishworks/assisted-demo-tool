import { combineReducers } from 'redux'
import { some, isEmpty } from 'lodash'
import controlWidget from './controlWidget.js'

import appReducer from './appReducer.js'
import demos from '../state/demos/reducer.js'
import personas from '../state/personas/reducer.js'


import { updateHashFromObject } from '../helpers/HashUtils.js'

const rootReducer = combineReducers({
  demos,
  personas,
  controlWidget,
  appReducer

});


const rootReducerUpdatingHash = (state, action) => {
  let newState =  rootReducer(state, action);

  let demoId = newState.demos.currentDemoId,
    stepNumber = newState.appReducer.current.stepIndex + 1,
    personaId = newState.personas.currentPersonaId;


  if (some([demoId, personaId], isEmpty) === false) {
    updateHashFromObject({
      demoId,
      stepNumber,
      personaId
    });
  }

  return newState;
};
export default rootReducerUpdatingHash;