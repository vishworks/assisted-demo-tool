import {
  POPUP_OPEN,
  POPUP_CLOSE_ALL,
  SET_DISPLAY_MODE,
  SET_GLOBAL_ERROR,
  STEP_CONTENT_SHOW_BULLETS
} from './types.js';

export const openPopup = popupId => ({
  type: POPUP_OPEN,
  payload: {
    popupId
  }
});

export const closeAllPopups = () => ({
  type: POPUP_CLOSE_ALL
});

export const setDisplayMode = displayMode => ({
  type: SET_DISPLAY_MODE,
  payload: {
    displayMode
  }
});

export const setGlobalError = errorMessage => ({
  type: SET_GLOBAL_ERROR,
  payload: {
    errorMessage
  }
});

export const showBullets = show => ({
  type: STEP_CONTENT_SHOW_BULLETS,
  payload: {
    show
  }
});
