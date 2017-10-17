

export const TYPE = {
  LOAD_CONFIG: 'LOAD_CONFIG',
  SET_CONFIG_ERROR: 'SET_CONFIG_ERROR',
  SET_DISPLAY_MODE: 'SET_DISPLAY_MODE',
  SELECT_PERSONA: 'SELECT_PERSONA',
  NEXT_STEP: 'NEXT_STEP',
  PREV_STEP: 'PREV_STEP',
  GOTO_STEP: 'GOTO_STEP',
  UPDATE_STATE_FROM_HASH: 'UPDATE_STATE_FROM_HASH',
  POPUP_OPEN: 'POPUP_OPEN',
  STEP_CONTENT_SHOW_BULLETS: 'STEP_CONTENT_SHOW_BULLETS'
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
    }, 1000); // FIXME remove throttling
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

export const selectPersona = (personaId) => {
  return {
    type: TYPE.SELECT_PERSONA,
    payload: {
      id: personaId
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

export const updateStateFromHash = (hash) => {
  return {
    type: TYPE.UPDATE_STATE_FROM_HASH,
    payload: {
      hash: hash
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

export const showBullets = (show) => {
  return {
    type: TYPE.STEP_CONTENT_SHOW_BULLETS,
    payload: {
      show: show
    }
  };
};