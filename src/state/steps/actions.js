

import { default as TYPE }  from './types.js'


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