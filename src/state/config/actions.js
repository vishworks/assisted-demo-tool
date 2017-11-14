import { LOAD_CONFIG } from './types.js';

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
