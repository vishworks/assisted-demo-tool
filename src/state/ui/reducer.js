import { combineReducers } from 'redux'


import { default as TYPE } from './types.js'
import DisplayModeEnum from '../../enums/DisplayMode.js'




const activePopup = (state = '', action = {}) => {

  switch (action.type) {
    case TYPE.POPUP_OPEN:
      return action.payload.popupId;

    case TYPE.POPUP_CLOSE_ALL:
      return '';

    default:
      return state
  }
};

const displayMode = (state = DisplayModeEnum.CONTROL_WIDGET, action = {}) => {

  switch (action.type) {
    case TYPE.SET_DISPLAY_MODE:
      return action.payload.displayMode;

    default:
      return state
  }
};

const globalErrorMessage = (state = '', action = {}) => {

  switch (action.type) {
    case TYPE.SET_GLOBAL_ERROR:
      return action.payload.errorMessage;

    default:
      return state
  }
};

const displayBullets = (state = false, action = {}) => {

  switch (action.type) {
    case TYPE.STEP_CONTENT_SHOW_BULLETS:
      return action.payload.show;

    default:
      return state
  }
};


const reducer = combineReducers({
  displayMode,
  activePopup,
  globalErrorMessage,
  displayBullets
});

export default reducer;