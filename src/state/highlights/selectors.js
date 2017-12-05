import { createSelector } from 'reselect';
import { get } from 'lodash';

import {
  getCurrentDemoId,
  getCurrentStepIndex
} from 'state/demos/selectors.js';

export const getHighlightsState = state => state.highlights;

export const getCurrentStepHighlights = createSelector(
  [getHighlightsState, getCurrentDemoId, getCurrentStepIndex],
  (highlights, demoId, stepIndex) => {
    return get(highlights, demoId + '.' + stepIndex);
  }
);
