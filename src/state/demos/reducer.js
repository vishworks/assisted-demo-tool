import { combineReducers } from 'redux'
import { merge, cloneDeep, map, get, find } from 'lodash'

import { parseCurrentHash } from '../../helpers/HashUtils.js'
import { TYPE as APP_TYPE } from '../../actions'

import { default as TYPE } from './types.js'




const demos = (state = [], action = {}) => {
  switch (action.type) {

    case APP_TYPE.LOAD_CONFIG:
      let newDemos = map(action.payload.config.demos, (demo) => {
        demo.included = true;
        return demo;
      });
      return Object.assign([], state, newDemos );

    case TYPE.DEMOS_SETTINGS_APPLY:
      return cloneDeep(action.payload.tempDemos);

    default:
      return state
  }
};

const tempDemos = (state = [], action = {}) => {
  switch (action.type) {

    case TYPE.DEMOS_SETTINGS_CANCEL:
      // tempDemos = []
      return [];

    case TYPE.DEMOS_SETTINGS_INCLUDE_DEMO:
      // tempDemos[demoId].included = true
      return Object.assign([], state, map(state, (demo) => {
          if (demo.id === action.payload.demoId) {
            demo.included = true;
          }
          return demo;
        })
      );

    case TYPE.DEMOS_SETTINGS_EXCLUDE_DEMO:
      // tempDemos[demoId].included = false
      return Object.assign([], state, map(state, (demo) => {
          if (demo.id === action.payload.demoId) {
            demo.included = false;
          }
          return demo;
        })
      );

    case TYPE.DEMOS_SETTINGS_MOVE_DEMO:
      // swap tempDemos elements oldIndex newIndex
      let tempDemosClone = cloneDeep(state),
        park = tempDemosClone[action.payload.newIndex];
      tempDemosClone[action.payload.newIndex] = tempDemosClone[action.payload.oldIndex];
      tempDemosClone[action.payload.oldIndex] = park;
      return Object.assign([], state, tempDemosClone);

    case TYPE.DEMOS_SETTINGS_START:
      return cloneDeep(action.payload.demos);

    case TYPE.DEMOS_SETTINGS_APPLY:
      return [];

    default:
      return state
  }
};



const currentDemoId = (state = '', action = {}) => {

  switch (action.type) {
    case APP_TYPE.LOAD_CONFIG: {
      let demos = action.payload.config.demos,
        newHash = parseCurrentHash();
      if (find(demos, { id: newHash.demoId })) {
        return  newHash.demoId;
      }
      return get(demos, '0.id');
    }

    case TYPE.DEMOS_SETTINGS_SELECT_DEMO: {
      return action.payload.demoId;
    }


    default:
      return state
  }
};


const currentStepIndex = (state = 0, action = {}) => {

  switch (action.type) {

    case APP_TYPE.LOAD_CONFIG: {
      return 0;
    }

    case TYPE.GOTO_STEP:
      return action.payload.stepIndex;

    case TYPE.DEMOS_SETTINGS_SELECT_DEMO: {
      return 0;
    }

    default:
      return state
  }
};



const reducer = combineReducers({
  tempDemos,
  demos,
  currentDemoId,
  currentStepIndex
});

export default reducer;