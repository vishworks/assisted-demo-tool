

import { default as TYPE }  from './types.js'



export const gotoStep = (stepIndex) => {
  return {
    type: TYPE.GOTO_STEP,
    payload: {
      stepIndex: stepIndex
    }
  };
};