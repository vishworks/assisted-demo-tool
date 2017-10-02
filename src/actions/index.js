
export const TYPE = {
  CONTROL_WIDGET_MINIMIZE: 'CONTROL_WIDGET_MINIMIZE',
  CONTROL_WIDGET_MAXIMIZE: 'CONTROL_WIDGET_MAXIMIZE',
  SELECT_PERSONA: 'SELECT_PERSONA'
};

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

export const selectPersona = (personaId) => {
  return {
    type: TYPE.SELECT_PERSONA,
    payload: {
      id: personaId
    }
  };
};