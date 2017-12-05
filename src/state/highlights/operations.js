import { _swapHighlights, _toggleHighlightStar } from './actions.js';
import {
  getCurrentDemoId,
  getCurrentStepIndex
} from 'state/demos/selectors.js';

export const swapHighlights = (oldIndex, newIndex) => (dispatch, getState) => {
  const state = getState(),
    currentDemoId = getCurrentDemoId(state),
    currentStepIndex = getCurrentStepIndex(state);
  dispatch(
    _swapHighlights(currentDemoId, currentStepIndex, oldIndex, newIndex)
  );
};

export const toggleHighlightStar = hlIndex => (dispatch, getState) => {
  const state = getState(),
    currentDemoId = getCurrentDemoId(state),
    currentStepIndex = getCurrentStepIndex(state);
  dispatch(_toggleHighlightStar(currentDemoId, currentStepIndex, hlIndex));
};
