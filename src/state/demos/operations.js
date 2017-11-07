import { includes, map, get } from 'lodash'
import {
  selectDemo as setCurrentDemoId,
  applyDemoSettings as applyDemoSettingsAction,
  startDemoSettings as startDemoSettingsAction

} from './actions.js'
import { getDemos, getTempDemos } from './localSelectors.js'

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
