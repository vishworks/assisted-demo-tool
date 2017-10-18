import { combineReducers } from 'redux'
import controlWidget from './controlWidget.js'

import appReducer from './appReducer.js'
import demos from '../state/demos/reducer.js'

const rootReducer = combineReducers({
  controlWidget,
  appReducer,
  demos
});

export default rootReducer;