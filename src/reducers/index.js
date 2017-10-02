import { combineReducers } from 'redux'
import controlWidget from './controlWidget.js'
import configuration from './configuration.js'
import viewPort from './viewPort.js'

const rootReducer = combineReducers({
  controlWidget,
  configuration,
  viewPort
});

export default rootReducer;