import { combineReducers } from 'redux';

import config from 'state/config/reducer.js';
import ui from 'state/ui/reducer.js';
import demos from 'state/demos/reducer.js';
import personas from 'state/personas/reducer.js';
import notes from 'state/notes/reducer.js';
import highlights from 'state/highlights/reducer.js';
import urlHistory from 'state/urlHistory/reducer.js';

import { RESET_STATE } from 'state/config/types.js';

const rootReducer = combineReducers({
  config,
  ui,
  demos,
  personas,
  notes,
  highlights,
  urlHistory
});

const rootReducerUpdatingHash = (state, action) => {
  let newState =
    action.type === RESET_STATE
      ? action.payload.newState
      : rootReducer(state, action);

  return newState;
};
export default rootReducerUpdatingHash;
