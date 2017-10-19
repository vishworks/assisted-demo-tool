import { combineReducers } from 'redux'
import { merge, cloneDeep, map } from 'lodash'

import { TYPE as APP_TYPE } from '../../actions'

import { default as TYPE } from './types.js'



const initialState = {
  demos: [],
  tempDemos: [],
  currentDemoId: null
};


const demosReducer = (state = [], action = {}) => {
  switch (action.type) {

    case APP_TYPE.LOAD_CONFIG:
      let newDemos = action.payload.config.demos.map((demo) => {
        demo.included = true;
        return demo;
      });
      return merge({}, state, newDemos );

    default:
      return state
  }
};

const tempDemosReducer = (state = [], action = {}) => {
  switch (action.type) {

    case TYPE.DEMOS_SETTINGS_CANCEL:
      // tempDemos = []
      return [];

    case TYPE.DEMOS_SETTINGS_INCLUDE_DEMO:
      // tempDemos[demoId].included = true
      return merge([], state, map(state, (demo) => {
          if (demo.id === action.payload.demoId) {
            demo.included = true;
          }
          return demo;
        })
      );

    case TYPE.DEMOS_SETTINGS_EXCLUDE_DEMO:
      // tempDemos[demoId].included = false
      return merge([], state, map(state, (demo) => {
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
      return merge([], state, tempDemosClone);

    default:
      return state
  }
};

// FIXME create demo count selector and apply to ordinator
// FIXME create a way to not specify state property name for selectors in the specific containers

const reducer = (state = { demos: [], tempDemos: [] }, action = {}) => {
  state = {
    demos: demosReducer(state.demos, action),
    tempDemos: tempDemosReducer(state.tempDemos, action)
  };
  switch (action.type) {

    case TYPE.DEMOS_SETTINGS_APPLY:
      return merge({}, state, {
        demos: cloneDeep(state.tempDemos),
        tempDemos: []
      });

    case TYPE.DEMOS_SETTINGS_START:
      // tempDemos = demos
      return merge({}, state, { tempDemos: cloneDeep(state.demos)});

    default:
      return state
  }
};


export default reducer;