import { reduce, isEqual, includes, toInteger, toString, find, get, set } from 'lodash'

import { parseHash } from '../helpers/HashUtils.js'
import { TYPE } from '../actions'
import TYPE_DEMOS from '../state/demos/types.js'
import { selectDemo } from '../state/demos/actions.js'

import { getDemos, getTempDemos, getCurrentDemoStepsCount } from '../state/demos/localSelectors.js'
import { getPersonas } from '../selectors'





const ConsistencyCheckMiddleware = store => next => action => {


  switch (action.type) {

    case TYPE.SELECT_PERSONA:
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

    case TYPE.GOTO_STEP:
    case TYPE.NEXT_STEP:
    case TYPE.PREV_STEP:
      set(action, 'meta.stepsCount', getCurrentDemoStepsCount(store.getState()));
      break;

    default:
      break;
  }

  return next(action);
};



export default ConsistencyCheckMiddleware;