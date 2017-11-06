

export const TYPE = {
  LOAD_CONFIG: 'LOAD_CONFIG',
  SET_CONFIG_ERROR: 'SET_CONFIG_ERROR',
  SET_DISPLAY_MODE: 'SET_DISPLAY_MODE',
  SELECT_PERSONA: 'SELECT_PERSONA',
  NEXT_STEP: 'NEXT_STEP',
  PREV_STEP: 'PREV_STEP',
  GOTO_STEP: 'GOTO_STEP',
  POPUP_OPEN: 'POPUP_OPEN',
  POPUP_CLOSE_ALL: 'POPUP_CLOSE_ALL',
  STEP_CONTENT_SHOW_BULLETS: 'STEP_CONTENT_SHOW_BULLETS',
  DEMO_EXCLUDE: 'DEMO_EXCLUDE',
  DEMO_INCLUDE: 'DEMO_INCLUDE',
  DEMO_MOVE_TO_INDEX: 'DEMO_MOVE_TO_INDEX',
  SETTINGS_START: 'SETTINGS_START',
  SETTINGS_APPLY: 'SETTINGS_APPLY',
  SETTINGS_CANCEL: 'SETTINGS_CANCEL'
};


export const loadConfig = (data) => {
  return {
    type: TYPE.LOAD_CONFIG,
    payload: {
      config: data
    }
  };
};

// Thunk
export function asyncLoadConfig(configUrl) {

  return function (dispatch) {
    return setTimeout(() => {
      fetch(configUrl).then(
        response => {
          try {
            response.json().then(function (data) {
              dispatch(loadConfig(data));
            });
          } catch(er) {
            dispatch(setConfigError('Error parsing configuration JSON at \'' + configUrl + '\': ' + er.message));
            console.error(er);
          }
        },
        (error) => {
          dispatch(setConfigError('Failed to fetch configuration at \'' + configUrl + '\''));
        }
      );
    }, 500); // FIXME remove throttling
  };
}


export const setDisplayMode = (displayMode) => {
  return {
    type: TYPE.SET_DISPLAY_MODE,
    payload: {
      displayMode: displayMode
    }
  };
};

export const nextStep = () => {
  return {
    type: TYPE.NEXT_STEP
  };
};

export const prevStep = () => {
  return {
    type: TYPE.PREV_STEP
  };
};

export const gotoStep = (stepIndex) => {
  return {
    type: TYPE.GOTO_STEP,
    payload: {
      stepIndex: stepIndex
    }
  };
};


export const setConfigError = (errorMessage) => {
  return {
    type: TYPE.SET_CONFIG_ERROR,
    payload: {
      errorMessage: errorMessage
    }
  };
};

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

export const showBullets = (show) => {
  return {
    type: TYPE.STEP_CONTENT_SHOW_BULLETS,
    payload: {
      show: show
    }
  };
};

