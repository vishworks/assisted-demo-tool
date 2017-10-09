import parseHash from '../helpers/HashParser.js'

export const TYPE = {
  LOAD_CONFIG: 'LOAD_CONFIG',
  SET_CONFIG_ERROR: 'SET_CONFIG_ERROR',
  CONTROL_WIDGET_MINIMIZE: 'CONTROL_WIDGET_MINIMIZE',
  CONTROL_WIDGET_MAXIMIZE: 'CONTROL_WIDGET_MAXIMIZE',
  SELECT_PERSONA: 'SELECT_PERSONA',
  NEXT_STEP: 'NEXT_STEP',
  PREV_STEP: 'PREV_STEP',
  GOTO_STEP: 'GOTO_STEP'
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
export function asyncLoadConfig(urlHash) {

  let opts = parseHash(urlHash);

  opts.configUrl = opts.configUrl || 'test-config/config_1.json';

  return function (dispatch) {
    return setTimeout(() => {
      fetch(opts.configUrl).then(
        response => {
          try {
            response.json().then(function (data) {
              dispatch(loadConfig(data));
            });
          } catch(er) {
            dispatch(setConfigError('Error parsing configuration JSON at \'' + opts.configUrl + '\': ' + er.message));
            console.error(er);
          }
        },
        (error) => {
          dispatch(setConfigError('Failed to fetch configuration at \'' + opts.configUrl + '\''));
        }
      );
    }, 1000); // FIXME remove throttling
  };
}


export const controlWidgetMinimize = () => {
  return {
    type: TYPE.CONTROL_WIDGET_MINIMIZE
  };
};

export const controlWidgetMaximize = () => {
  return {
    type: TYPE.CONTROL_WIDGET_MAXIMIZE
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


