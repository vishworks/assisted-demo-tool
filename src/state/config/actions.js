import { LOAD_CONFIG, RESET_STATE } from './types.js';

export { asyncLoadConfig } from './operations.js';

export const loadConfig = (
  config,
  initialDemoId,
  initialStepIndex,
  initialPersonaId
) => ({
  type: LOAD_CONFIG,
  payload: {
    config,
    initialDemoId,
    initialStepIndex,
    initialPersonaId
  }
});

export const resetState = newState => ({
  type: RESET_STATE,
  payload: {
    newState
  }
});
