import { combineReducers } from 'redux'
import controlWidget from './controlWidget.js'
import configuration from './configuration.js'

const rootReducer = combineReducers({
  controlWidget,
  configuration
});

export default rootReducer;