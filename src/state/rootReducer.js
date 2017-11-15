import { combineReducers } from 'redux';
import { some, isEmpty } from 'lodash';

import config from 'state/config/reducer.js';
import ui from 'state/ui/reducer.js';
import demos from 'state/demos/reducer.js';
import personas from 'state/personas/reducer.js';

import {
  getCurrentDemoId,
  getCurrentStepIndex
} from 'state/demos/selectors.js';
import { getCurrentPersonaId } from 'state/personas/selectors.js';

import { RESET_STATE } from 'state/config/types.js';

import { updateHashFromObject } from 'helpers/HashUtils.js';

const rootReducer = combineReducers({
  config,
  ui,
  demos,
  personas
});

const rootReducerUpdatingHash = (state, action) => {
  let newState =
    action.type === RESET_STATE
      ? action.payload.newState
      : rootReducer(state, action);

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
