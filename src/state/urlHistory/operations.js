import { includes, map } from 'lodash';
import { setCurrentUrl } from './actions.js';
import {
  getCurrentUrl,
  getCurrentUrlIsFirst,
  getCurrentUrlIsLast,
  getNextUrl,
  getPrevUrl
} from './selectors.js';
import { getCurrentPersonaId } from 'state/personas/selectors.js';

export const gotoNextUrl = () => (dispatch, getState) => {
  const state = getState();
  const isLastUrl = getCurrentUrlIsLast(state);
  if (!isLastUrl) {
    const currentPersonaId = getCurrentPersonaId(state);
    const nextUrl = getNextUrl(state);
    dispatch(setCurrentUrl(currentPersonaId, nextUrl));
  }
};

export const gotoPrevUrl = () => (dispatch, getState) => {
  const state = getState();
  const isFirstUrl = getCurrentUrlIsFirst(state);
  if (!isFirstUrl) {
    const currentPersonaId = getCurrentPersonaId(state);
    const prevUrl = getPrevUrl(state);
    dispatch(setCurrentUrl(currentPersonaId, prevUrl));
  }
};
