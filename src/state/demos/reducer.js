
import { merge, cloneDeep, map } from 'lodash'

import { TYPE as APP_TYPE } from '../../actions'

import { default as TYPE } from './types.js'



const initialState = {
  demos: [],
  tempDemos: [],
  currentDemoId: null
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case APP_TYPE.LOAD_CONFIG:
      // demos = enhanced action.demos
      let newDemos = action.payload.config.demos.map((demo) => {
        demo.included = true;
        return demo;
      });
      return merge({}, state, { demos: newDemos });

    case TYPE.DEMOS_SETTINGS_START:
      // tempDemos = demos
      return merge({}, state, { tempDemos: cloneDeep(state.demos) });

    case TYPE.DEMOS_SETTINGS_APPLY:
      // demos = tempDemos
      // tempDemos = []
      return merge({}, state, {
        demos: cloneDeep(state.tempDemos),
        tempDemos: []
      });

    case TYPE.DEMOS_SETTINGS_CANCEL:
      // tempDemos = []
      return merge({}, state, {
        tempDemos: []
      });

    case TYPE.DEMOS_SETTINGS_INCLUDE_DEMO:
      // tempDemos[demoId].included = true
      return merge({}, state, {
        tempDemos: map(state.tempDemos, (demo) => {
          if (demo.id === action.payload.demoId) {
            demo.included = true;
          }
          return demo;
        })
      });

    case TYPE.DEMOS_SETTINGS_EXCLUDE_DEMO:
      // tempDemos[demoId].included = false
      return merge({}, state, {
        tempDemos: map(state.tempDemos, (demo) => {
          if (demo.id === action.payload.demoId) {
            demo.included = false;
          }
          return demo;
        })
      });

    case TYPE.DEMOS_SETTINGS_MOVE_DEMO:
      // swap tempDemos elements oldIndex newIndex
      let tempDemosClone = cloneDeep(state.tempDemos),
        park = tempDemosClone[action.payload.newIndex];
      tempDemosClone[action.payload.newIndex] = tempDemosClone[action.payload.oldIndex];
      tempDemosClone[action.payload.oldIndex] = park;
      return merge({}, state, {
        tempDemos: tempDemosClone
      });

    default:
      return state
  }
};

export default reducer;