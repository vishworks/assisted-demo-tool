import { LOAD_CONFIG } from './types.js';

export const loadConfig = (
  data,
  initialDemoId,
  initialStepIndex,
  initialPersonaId
) => {
  return {
    type: LOAD_CONFIG,
    payload: {
      config: data,
      initialDemoId,
      initialStepIndex,
      initialPersonaId
    }
  };
};
