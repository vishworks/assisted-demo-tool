import {
  DEMOS_SETTINGS_APPLY,
  DEMOS_SETTINGS_CANCEL,
  DEMOS_SETTINGS_INCLUDE_DEMO,
  DEMOS_SETTINGS_EXCLUDE_DEMO,
  DEMOS_SETTINGS_MOVE_DEMO,
  DEMOS_SETTINGS_START,
  DEMOS_SETTINGS_SELECT_DEMO,
  GOTO_STEP
} from './types.js';

export {
  startDemoSettings,
  applyDemoSettings,
  selectDemo,
  gotoStep
} from './operations.js';

export const _startDemoSettings = demos => ({
  type: DEMOS_SETTINGS_START,
  payload: {
    demos
  }
});

export const _applyDemoSettings = tempDemos => ({
  type: DEMOS_SETTINGS_APPLY,
  payload: {
    tempDemos
  }
});

export const _selectDemo = demoId => ({
  type: DEMOS_SETTINGS_SELECT_DEMO,
  payload: {
    demoId
  }
});

export const _gotoStep = stepIndex => ({
  type: GOTO_STEP,
  payload: {
    stepIndex: stepIndex
  }
});

export const cancelDemoSettings = () => ({
  type: DEMOS_SETTINGS_CANCEL
});

export const includeDemo = (demoId, demoIndex) => ({
  type: DEMOS_SETTINGS_INCLUDE_DEMO,
  payload: {
    demoId,
    demoIndex
  }
});

export const excludeDemo = (demoId, demoIndex) => ({
  type: DEMOS_SETTINGS_EXCLUDE_DEMO,
  payload: {
    demoId,
    demoIndex
  }
});

export const moveDemo = (demoId, oldIndex, newIndex) => ({
  type: DEMOS_SETTINGS_MOVE_DEMO,
  payload: {
    demoId,
    oldIndex,
    newIndex
  }
});
