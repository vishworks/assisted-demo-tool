import { combineReducers } from 'redux'
import { some, isEmpty } from 'lodash'
import controlWidget from './controlWidget.js'

import appReducer from './appReducer.js'

import ui from '../state/ui/reducer.js'
import demos from '../state/demos/reducer.js'
import personas from '../state/personas/reducer.js'
import steps from '../state/steps/reducer.js'

import { getCurrentDemoId } from '../state/demos/localSelectors.js'
import { getCurrentPersonaId } from '../state/personas/localSelectors.js'
import { getCurrentStepIndex } from '../state/steps/localSelectors.js'

import { updateHashFromObject } from '../helpers/HashUtils.js'

const rootReducer = combineReducers({
  ui,
  demos,
  personas,
  steps,
  controlWidget,
  appReducer

});


const rootReducerUpdatingHash = (state, action) => {
  let newState =  rootReducer(state, action);

  let demoId = getCurrentDemoId(newState),
    stepNumber = getCurrentStepIndex(newState) + 1,
    personaId = getCurrentPersonaId(newState);


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