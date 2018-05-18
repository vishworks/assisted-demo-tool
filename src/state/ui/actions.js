import {
  POPUP_OPEN,
  POPUP_CLOSE_ALL,
  SET_DISPLAY_MODE,
  SET_GLOBAL_ERROR,
  STEP_CONTENT_SHOW_PRESENTER_CONTENT
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

export const showPresenterContent = show => ({
  type: STEP_CONTENT_SHOW_PRESENTER_CONTENT,
  payload: {
    show
  }
});
