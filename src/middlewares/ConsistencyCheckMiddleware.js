import { reduce, isEqual, includes, toInteger, toString, find, get, set } from 'lodash'

import { parseHash } from '../helpers/HashUtils.js'
import { TYPE } from '../actions'
import TYPE_DEMOS from '../state/demos/types.js'

import TYPE_PERSONAS from '../state/personas/types.js'
import { selectDemo } from '../state/demos/actions.js'

import { getDemos, getTempDemos } from '../state/demos/localSelectors.js'
import { getStepsCount, getAllSteps, getCurrentStepIndex } from '../state/steps/localSelectors.js'
import { getPersonas } from '../state/personas/localSelectors.js'





const ConsistencyCheckMiddleware = store => next => action => {


  switch (action.type) {

    case TYPE_PERSONAS.SELECT_PERSONA:
      set(action, 'meta.personas', getPersonas(store.getState()));
      break;

    case TYPE_DEMOS.DEMOS_SETTINGS_SELECT_DEMO:
      set(action, 'meta.demos', getDemos(store.getState()));
      break;


    case TYPE_DEMOS.DEMOS_SETTINGS_APPLY:
      set(action, 'meta.tempDemos', getTempDemos(store.getState()));
      break;


    case TYPE_DEMOS.DEMOS_SETTINGS_START:
      set(action, 'meta.demos', getDemos(store.getState()));
      break;

    case TYPE.GOTO_STEP: {
      set(action, 'meta.stepsCount', getStepsCount(store.getState()));
      let tgtStep = get(getAllSteps(store.getState()), action.payload.stepIndex);
      set(action, 'meta.targetStep', tgtStep);
      break;
    }


    case TYPE.NEXT_STEP: {
      set(action, 'meta.stepsCount', getStepsCount(store.getState()));
      let state = store.getState(),
        tgtStep = get(getAllSteps(state), getCurrentStepIndex(state) + 1);
      set(action, 'meta.targetStep', tgtStep);
      break;
    }

    case TYPE.PREV_STEP: {
      set(action, 'meta.stepsCount', getStepsCount(store.getState()));
      let state = store.getState(),
        tgtStep = get(getAllSteps(state), getCurrentStepIndex(state) - 1);
      set(action, 'meta.targetStep', tgtStep);
      break;
    }

    default:
      break;
  }

  return next(action);
};



export default ConsistencyCheckMiddleware;