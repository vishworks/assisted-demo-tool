import { SWAP_HIGHLIGHTS, TOGGLE_HIGHLIGHT_STAR } from './types.js';

export { swapHighlights, toggleHighlightStar } from './operations.js';

export const _swapHighlights = (demoId, stepIndex, oldIndex, newIndex) => ({
  type: SWAP_HIGHLIGHTS,
  payload: {
    demoId,
    stepIndex,
    oldIndex,
    newIndex
  }
});

export const _toggleHighlightStar = (demoId, stepIndex, hlIndex) => ({
  type: TOGGLE_HIGHLIGHT_STAR,
  payload: {
    demoId,
    stepIndex,
    hlIndex
  }
});
