import { combineReducers } from 'redux'
import controlWidget from './controlWidget.js'
import configuration from './configuration.js'
import viewPort from './viewPort.js'

import appReducer from './appReducer.js'

const rootReducer = combineReducers({
  controlWidget,
  configuration,
  viewPort,
  appReducer
});

export default rootReducer;