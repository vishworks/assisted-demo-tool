
import { getStepsCount, getCurrentStepIndex } from './localSelectors.js'


import {
  gotoStep as gotoStepAction
}  from './actions.js'


export const nextStep = () =>
  (dispatch, getState) => {
    let state = getState(),
      stepsCount = getStepsCount(state),
      currentStepIndex = getCurrentStepIndex(state);
    if (currentStepIndex < stepsCount - 1) {
      dispatch(gotoStepAction(currentStepIndex + 1));
    } else {
      console.warn('[nextStep] attempting to go to next step from last step');
      dispatch(gotoStepAction(currentStepIndex)); // to update url
    }
  };


export const prevStep = () =>
  (dispatch, getState) => {
    let state = getState(),
      currentStepIndex = getCurrentStepIndex(state);
    if (currentStepIndex > 0) {
      dispatch(gotoStepAction(currentStepIndex - 1));
    } else {
      console.warn('[prevStep] attempting to go to prev step from first step');
      dispatch(gotoStepAction(currentStepIndex)); // to update url
    }
  };

export const gotoStep = (stepIndex) =>
  (dispatch, getState) => {
    let state = getState(),
      stepsCount = getStepsCount(state),
      currentStepIndex = getCurrentStepIndex(state);
    if (stepIndex > 0 && stepIndex < stepsCount - 1) {
      dispatch(gotoStepAction(stepIndex));
    } else {
      console.warn('[gotoStep] attempting to go to step with index ' + stepIndex );
      dispatch(gotoStepAction(currentStepIndex)); // to update url
    }
  };