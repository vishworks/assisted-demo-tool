import { setCurrentUrlIndex } from './actions.js';
import {
  getCurrentUrlIsFirst,
  getCurrentUrlIsLast,
  getCurrentUrlIndex
} from './selectors.js';
import { getCurrentPersonaId } from 'state/personas/selectors.js';

export const gotoNextUrl = () => (dispatch, getState) => {
  const state = getState();
  const isLastUrl = getCurrentUrlIsLast(state);
  if (!isLastUrl) {
    const currentPersonaId = getCurrentPersonaId(state);
    const currentUrlIndex = getCurrentUrlIndex(state);
    dispatch(setCurrentUrlIndex(currentPersonaId, currentUrlIndex + 1));
  }
};

export const gotoPrevUrl = () => (dispatch, getState) => {
  const state = getState();
  const isFirstUrl = getCurrentUrlIsFirst(state);
  if (!isFirstUrl) {
    const currentPersonaId = getCurrentPersonaId(state);
    const currentUrlIndex = getCurrentUrlIndex(state);
    dispatch(setCurrentUrlIndex(currentPersonaId, currentUrlIndex - 1));
  }
};
