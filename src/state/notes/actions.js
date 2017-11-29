import { ADD_NOTE, SWAP_NOTES } from './types.js';

export { addNote, swapNotes } from './operations.js';

export const _addNote = (demoId, title, text) => ({
  type: ADD_NOTE,
  payload: { demoId, title, text }
});

export const _swapNotes = (demoId, oldIndex, newIndex) => ({
  type: SWAP_NOTES,
  payload: {
    demoId,
    oldIndex,
    newIndex
  }
});
