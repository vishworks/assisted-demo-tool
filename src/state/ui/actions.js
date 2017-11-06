

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