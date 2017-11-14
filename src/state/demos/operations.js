import { includes, map, get } from 'lodash';
import {
  selectDemo as setCurrentDemoId,
  applyDemoSettings as applyDemoSettingsAction,
  startDemoSettings as startDemoSettingsAction,
  gotoStep as gotoStepAction
} from './actions.js';
import { selectPersona } from '../personas/operations.js';

import {
  getDemos,
  getTempDemos,
  getStepsCount,
  getCurrentStepIndex,
  getCurrentStepPersonaId
} from './selectors.js';
import { getCurrentPersonaId } from '../personas/selectors.js';

export function selectDemo(demoId) {
  return function(dispatch, getState) {
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
  return function(dispatch, getState) {
    var tempDemos = getTempDemos(getState());
    dispatch(applyDemoSettingsAction(tempDemos));
  };
}

export function startDemoSettings() {
  return function(dispatch, getState) {
    var demos = getDemos(getState());
    dispatch(startDemoSettingsAction(demos));
  };
}

export const gotoStep = stepIndex => (dispatch, getState) => {
  let state = getState(),
    stepsCount = getStepsCount(state),
    currentStepIndex = getCurrentStepIndex(state),
    currentPersonaId = getCurrentPersonaId(state);
  if (stepIndex >= 0 && stepIndex < stepsCount) {
    dispatch(gotoStepAction(stepIndex));

    // update persona if necessary
    let nextPersonaId = getCurrentStepPersonaId(getState());
    if (nextPersonaId !== currentPersonaId) {
      dispatch(selectPersona(nextPersonaId));
    }
  } else {
    console.warn('[gotoStep] attempting to go to step with index ' + stepIndex);
    dispatch(gotoStepAction(currentStepIndex)); // to update url
  }
};

export const nextStep = () => (dispatch, getState) => {
  let currentStepIndex = getCurrentStepIndex(getState());
  gotoStep(currentStepIndex + 1)(dispatch, getState);
};

export const prevStep = () => (dispatch, getState) => {
  let currentStepIndex = getCurrentStepIndex(getState());
  gotoStep(currentStepIndex - 1)(dispatch, getState);
};
