

export const TYPE = {
  LOAD_CONFIG: 'LOAD_CONFIG',
  SET_CONFIG_ERROR: 'SET_CONFIG_ERROR',
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
    }, 500); // FIXME remove throttling
  };
}






export const setConfigError = (errorMessage) => {
  return {
    type: TYPE.SET_CONFIG_ERROR,
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

