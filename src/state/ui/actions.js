

import { default as TYPE }  from './types.js'



export const openPopup = (popupId) => {
  return {
    type: TYPE.POPUP_OPEN,
    payload: {
      popupId: popupId
    }
  };
};

export const closeAllPopups = () => {
  return {
    type: TYPE.POPUP_CLOSE_ALL
  };
};

export const setDisplayMode = (displayMode) => {
  return {
    type: TYPE.SET_DISPLAY_MODE,
    payload: {
      displayMode: displayMode
    }
  };
};


export const setGlobalError = (errorMessage) => {
  return {
    type: TYPE.SET_GLOBAL_ERROR,
    payload: {
      errorMessage: errorMessage
    }
  };
};



export const showBullets = (show) => {
  return {
    type: TYPE.STEP_CONTENT_SHOW_BULLETS,
    payload: {
      show: show
    }
  };
};