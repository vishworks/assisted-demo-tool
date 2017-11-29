import { _addNote, _swapNotes } from './actions.js';
import { getCurrentDemoId } from 'state/demos/selectors.js';

export const addNote = (title, text) => (dispatch, getState) => {
  var demoId = getCurrentDemoId(getState());
  dispatch(_addNote(demoId, title, text));
};

export const swapNotes = (oldIndex, newIndex) => (dispatch, getState) => {
  let currentDemoId = getCurrentDemoId(getState());
  dispatch(_swapNotes(currentDemoId, oldIndex, newIndex));
};
