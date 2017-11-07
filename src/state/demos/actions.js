

import { default as TYPES }  from './types.js'



export const startDemoSettings = (demos) => ({
  type: TYPES.DEMOS_SETTINGS_START,
  payload: {
    demos
  }
});

export const applyDemoSettings = (tempDemos) => ({
  type: TYPES.DEMOS_SETTINGS_APPLY,
  payload: {
    tempDemos
  }
});

export const cancelDemoSettings = () => ({
  type: TYPES.DEMOS_SETTINGS_CANCEL
});

export const includeDemo = (demoId, demoIndex) => ({
  type: TYPES.DEMOS_SETTINGS_INCLUDE_DEMO,
  payload: {
    demoId,
    demoIndex
  }
});

export const excludeDemo = (demoId, demoIndex) => ({
  type: TYPES.DEMOS_SETTINGS_EXCLUDE_DEMO,
  payload: {
    demoId,
    demoIndex
  }
});

export const moveDemo = (demoId, oldIndex, newIndex) => ({
  type: TYPES.DEMOS_SETTINGS_MOVE_DEMO,
  payload: {
    demoId,
    oldIndex,
    newIndex
  }
});

export const selectDemo = (demoId) => ({
  type: TYPES.DEMOS_SETTINGS_SELECT_DEMO,
  payload: {
    demoId
  }
});
