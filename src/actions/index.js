
export const TYPE = {
  LOAD_CONFIG: 'LOAD_CONFIG',
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
export function asyncLoadConfig() {

  return function (dispatch) {
    return setTimeout(() => {
      fetch('test-config/config_1.json').then(// FIXME use a parametric url
          response => {
          response.json().then(function (data) {
            dispatch(loadConfig(data));
          });
        },
          error => dispatch(loadConfig(null))
      );
    }, 1000);
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

