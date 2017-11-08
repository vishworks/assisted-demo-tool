import { includes, map, get } from 'lodash'
import {
  selectDemo as setCurrentDemoId,
  applyDemoSettings as applyDemoSettingsAction,
  startDemoSettings as startDemoSettingsAction,
  gotoStep as gotoStepAction
} from './actions.js'
import { getDemos, getTempDemos, getStepsCount, getCurrentStepIndex } from './localSelectors.js'

export function selectDemo(demoId) {

  return function (dispatch, getState) {

    var demos = getDemos(getState());
    if (includes(map(demos, 'id'), demoId)) {
      dispatch(setCurrentDemoId(demoId));
    } else {
      console.error('[selectDemo] : demo with id ' + demoId + ' not found');
      dispatch(setCurrentDemoId(get(demos, '0.id')));
    }

  };
}

export function applyDemoSettings() {
  return function (dispatch, getState) {
    var tempDemos = getTempDemos(getState());
    dispatch(applyDemoSettingsAction(tempDemos));
  };
}

export function startDemoSettings() {
  return function (dispatch, getState) {
    var demos = getDemos(getState());
    dispatch(startDemoSettingsAction(demos));
  };
}


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