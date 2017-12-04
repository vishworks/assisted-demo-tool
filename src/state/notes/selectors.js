import { createSelector } from 'reselect';

import { getCurrentDemoId } from 'state/demos/selectors.js';

export const getNotesState = state => state.notes;

export const getCurrentDemoNotes = createSelector(
  [getNotesState, getCurrentDemoId],
  (notes, currentDemoId) => notes && notes[currentDemoId]
);
