import { combineReducers } from 'redux'
import controlWidget from './controlWidget.js'

import appReducer from './appReducer.js'

const rootReducer = combineReducers({
  controlWidget,
  appReducer
});

export default rootReducer;