import {
  POPUP_OPEN,
  POPUP_CLOSE_ALL,
  SET_DISPLAY_MODE,
  SET_GLOBAL_ERROR,
  STEP_CONTENT_SHOW_BULLETS
} from './types.js';

export const openPopup = popupId => {
  return {
    type: POPUP_OPEN,
    payload: {
      popupId: popupId
    }
  };
};

export const closeAllPopups = () => {
  return {
    type: POPUP_CLOSE_ALL
  };
};

export const setDisplayMode = displayMode => {
  return {
    type: SET_DISPLAY_MODE,
    payload: {
      displayMode: displayMode
    }
  };
};

export const setGlobalError = errorMessage => {
  return {
    type: SET_GLOBAL_ERROR,
    payload: {
      errorMessage: errorMessage
    }
  };
};

export const showBullets = show => {
  return {
    type: STEP_CONTENT_SHOW_BULLETS,
    payload: {
      show: show
    }
  };
};
