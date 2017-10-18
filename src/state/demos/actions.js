

import { default as TYPES }  from './types.js'



export const startDemoSettings = () => ({
  type: TYPES.DEMOS_SETTINGS_START
});

export const applyDemoSettings = () => ({
  type: TYPES.DEMOS_SETTINGS_APPLY
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