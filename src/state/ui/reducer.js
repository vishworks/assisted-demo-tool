import { combineReducers } from 'redux';

import DisplayModeEnum from '../../enums/DisplayMode.js';

import {
  POPUP_OPEN,
  POPUP_CLOSE_ALL,
  SET_DISPLAY_MODE,
  SET_GLOBAL_ERROR,
  STEP_CONTENT_SHOW_BULLETS
} from './types.js';

const activePopup = (state = '', action = {}) => {
  switch (action.type) {
    case POPUP_OPEN:
      return action.payload.popupId;

    case POPUP_CLOSE_ALL:
      return '';

    default:
      return state;
  }
};

const displayMode = (state = DisplayModeEnum.CONTROL_WIDGET, action = {}) => {
  switch (action.type) {
    case SET_DISPLAY_MODE:
      return action.payload.displayMode;

    default:
      return state;
  }
};

const globalErrorMessage = (state = '', action = {}) => {
  switch (action.type) {
    case SET_GLOBAL_ERROR:
      return action.payload.errorMessage;

    default:
      return state;
  }
};

const displayBullets = (state = false, action = {}) => {
  switch (action.type) {
    case STEP_CONTENT_SHOW_BULLETS:
      return action.payload.show;

    default:
      return state;
  }
};

const reducer = combineReducers({
  displayMode,
  activePopup,
  globalErrorMessage,
  displayBullets
});

export default reducer;
