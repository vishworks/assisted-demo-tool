

import { default as TYPES }  from './types.js'


export const loadConfig = (data, initialDemoId, initialStepIndex, initialPersonaId) => {
  return {
    type: TYPE.LOAD_CONFIG,
    payload: {
      config: data,
      initialDemoId,
      initialStepIndex,
      initialPersonaId
    }
  };
};