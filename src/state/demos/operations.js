import { includes, map, get, find } from 'lodash';
import {
  _selectDemo,
  _applyDemoSettings,
  _startDemoSettings,
  _gotoStep
} from './actions.js';
import { selectPersona } from '../personas/actions.js';

import {
  getCurrentDemo,
  getDemos,
  getIncludedDemos,
  getTempDemos,
  getStepsCount,
  getCurrentStepIndex,
  getCurrentStepPersonaId,
  getNextDemoId
} from './selectors.js';

import { getCurrentPersonaId } from '../personas/selectors.js';

export const selectDemo = demoId => (dispatch, getState) => {
  var demos = getIncludedDemos(getState());
  if (includes(map(demos, 'id'), demoId)) {
    dispatch(_selectDemo(demoId));
  } else {
    console.error(
      '[selectDemo] : demo with id ' + demoId + ' not found, or not included'
    );
    dispatch(_selectDemo(get(demos, '0.id')));
  }
};

export const applyDemoSettings = () => (dispatch, getState) => {
  var tempDemos = getTempDemos(getState());
  if (!find(tempDemos, 'included')) {
    console.error('[applyDemoSettings] : trying to exclude all demos');
    return;
  }
  dispatch(_applyDemoSettings(tempDemos));
  if (!getCurrentDemo(getState()).included) {
    dispatch(_selectDemo(get(find(tempDemos, 'included'), 'id')));
  }
};

export const startDemoSettings = () => (dispatch, getState) => {
  var demos = getDemos(getState());
  dispatch(_startDemoSettings(demos));
};

export const gotoStep = stepIndex => (dispatch, getState) => {
  let state = getState(),
    stepsCount = getStepsCount(state),
    currentStepIndex = getCurrentStepIndex(state),
    currentPersonaId = getCurrentPersonaId(state);
  if (stepIndex >= 0 && stepIndex < stepsCount) {
    dispatch(_gotoStep(stepIndex));

    // update persona if necessary
    let nextPersonaId = getCurrentStepPersonaId(getState());
    if (nextPersonaId !== currentPersonaId) {
      dispatch(selectPersona(nextPersonaId));
    }
  } else {
    console.warn('[gotoStep] attempting to go to step with index ' + stepIndex);
    dispatch(_gotoStep(currentStepIndex)); // to update url
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

export const nextDemo = () => (dispatch, getState) => {
  const nextDemoId = getNextDemoId(getState());
  selectDemo(nextDemoId)(dispatch, getState);
};
