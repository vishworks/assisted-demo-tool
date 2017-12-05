import { reduce, map, get, set, cloneDeep, isEmpty } from 'lodash';
import { arrayMove } from 'react-sortable-hoc';

import { LOAD_CONFIG } from '../config/types.js';

import { SWAP_HIGHLIGHTS, TOGGLE_HIGHLIGHT_STAR } from './types.js';

const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case LOAD_CONFIG: {
      if (!isEmpty(state)) {
        // persisted state
        return state;
      }
      return reduce(
        get(action, 'payload.config.demos'),
        (result, demo) => {
          result[demo.id] = map(demo.steps, step => step.highlights);
          return result;
        },
        {}
      );
    }

    case SWAP_HIGHLIGHTS: {
      let { demoId, stepIndex } = action.payload,
        hlPath = demoId + '.' + stepIndex;
      let highlights = get(state, hlPath);
      if (highlights) {
        let newState = cloneDeep(state);
        highlights = get(newState, hlPath);
        highlights = arrayMove(
          highlights,
          action.payload.oldIndex,
          action.payload.newIndex
        );
        set(newState, hlPath, highlights);
        return newState;
      }
      return state;
    }

    case TOGGLE_HIGHLIGHT_STAR: {
      // FIXME refactor as reducer functions
      let hlPath2 =
        action.payload.demoId +
        '.' +
        action.payload.stepIndex +
        '.' +
        action.payload.hlIndex;
      let newState2 = cloneDeep(state),
        targetHighlight = get(newState2, hlPath2);
      if (targetHighlight) {
        targetHighlight.starred = !targetHighlight.starred;
      }
      return newState2;
    }

    default:
      return state;
  }
};

export default reducer;
