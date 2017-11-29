import { cloneDeep } from 'lodash';
import { arrayMove } from 'react-sortable-hoc';

import { ADD_NOTE, SWAP_NOTES } from './types.js';

const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case ADD_NOTE: {
      let newState = cloneDeep(state);
      if (!newState[action.payload.demoId]) {
        newState[action.payload.demoId] = [];
      }
      newState[action.payload.demoId].push({
        title: action.payload.title,
        text: action.payload.text,
        date: new Date().toISOString()
      });
      return Object.assign({}, state, newState);
    }

    case SWAP_NOTES: {
      if (state[action.payload.demoId]) {
        let newArray = cloneDeep(state[action.payload.demoId]);
        newArray = arrayMove(
          newArray,
          action.payload.oldIndex,
          action.payload.newIndex
        );
        let newState = {};
        newState[action.payload.demoId] = newArray;
        return Object.assign({}, state, newState);
      }
      return state;
    }

    default:
      return state;
  }
};

export default reducer;
