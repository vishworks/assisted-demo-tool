import { combineReducers } from 'redux';
import { cloneDeep, map, reduce } from 'lodash';

import { LOAD_CONFIG } from '../config/types.js';

import {
  DEMOS_SETTINGS_APPLY,
  DEMOS_SETTINGS_INCLUDE_DEMO,
  DEMOS_SETTINGS_EXCLUDE_DEMO,
  DEMOS_SETTINGS_MOVE_DEMO,
  DEMOS_SETTINGS_START,
  DEMOS_SETTINGS_SELECT_DEMO,
  GOTO_STEP
} from './types.js';

const demosMap = (state = {}, action = {}) => {
  switch (action.type) {
    case LOAD_CONFIG:
      return reduce(
        action.payload.config.demos,
        (acc, demo) => {
          acc[demo.id] = demo;
          return acc;
        },
        {}
      );

    default:
      return state;
  }
};

const demosIdList = (state = [], action = {}) => {
  switch (action.type) {
    case LOAD_CONFIG:
      return map(action.payload.config.demos, demo => demo.id);
    default:
      return state;
  }
};

// demos configuration
const mergeDemo = (state, demoId, obj) => {
  return {
    ...state,
    [demoId]: { ...state[demoId], ...obj }
  };
};

const demosData = (state = null, action = {}) => {
  switch (action.type) {
    case LOAD_CONFIG:
      if (!state) {
        return reduce(
          action.payload.config.demos,
          (acc, demo) => {
            acc[demo.id] = { included: true };
            return acc;
          },
          {}
        );
      }
      return state;

    case DEMOS_SETTINGS_APPLY:
      return cloneDeep(action.payload.config.data);

    default:
      return state;
  }
};

const demosOrder = (state = null, action = {}) => {
  switch (action.type) {
    case LOAD_CONFIG:
      if (!state) {
        return map(action.payload.config.demos, demo => demo.id);
      }
      return state;

    case DEMOS_SETTINGS_APPLY:
      return cloneDeep(action.payload.config.order);

    default:
      return state;
  }
};

const tempDemosData = (state = {}, action = {}) => {
  switch (action.type) {
    case DEMOS_SETTINGS_INCLUDE_DEMO:
      return mergeDemo(state, action.payload.demoId, { included: true });

    case DEMOS_SETTINGS_EXCLUDE_DEMO:
      return mergeDemo(state, action.payload.demoId, { included: false });

    case DEMOS_SETTINGS_START:
      return action.payload.config.data;

    case DEMOS_SETTINGS_APPLY:
      return {};

    default:
      return state;
  }
};

const tempDemosOrder = (state = [], action = {}) => {
  switch (action.type) {
    case DEMOS_SETTINGS_MOVE_DEMO:
      // swap tempDemos elements oldIndex newIndex
      return map(state, (item, i) => {
        if (i === action.payload.oldIndex) {
          return state[action.payload.newIndex];
        }
        if (i === action.payload.newIndex) {
          return state[action.payload.oldIndex];
        }
        return state[i];
      });

    case DEMOS_SETTINGS_START:
      return action.payload.config.order;

    case DEMOS_SETTINGS_APPLY:
      return [];

    default:
      return state;
  }
};

const currentDemoId = (state = '', action = {}) => {
  switch (action.type) {
    case LOAD_CONFIG:
      return action.payload.initialDemoId;

    case DEMOS_SETTINGS_SELECT_DEMO: {
      return action.payload.demoId;
    }

    default:
      return state;
  }
};

const currentStepIndex = (state = 0, action = {}) => {
  switch (action.type) {
    case LOAD_CONFIG:
      return action.payload.initialStepIndex;

    case GOTO_STEP:
      return action.payload.stepIndex;

    case DEMOS_SETTINGS_SELECT_DEMO:
      return 0;

    default:
      return state;
  }
};

const reducer = combineReducers({
  demosIdList,
  demosMap,
  currentDemoId,
  currentStepIndex,
  config: combineReducers({
    data: demosData,
    order: demosOrder
  }),
  tempConfig: combineReducers({
    data: tempDemosData,
    order: tempDemosOrder
  })
});

export default reducer;
